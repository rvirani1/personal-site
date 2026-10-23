"""Keyword search, mirroring the front end. The place to grow semantic search later."""

import re
import unicodedata

from .content import Doc


def normalize(s: str) -> str:
    s = unicodedata.normalize("NFKD", s.lower())
    return "".join(c for c in s if not unicodedata.combining(c)).replace("’", "").replace("'", "")


def tokenize(q: str) -> list[str]:
    return [t for t in re.split(r"[^\w]+", normalize(q)) if len(t) > 1]


def search(docs: list[Doc], query: str, limit: int = 20) -> list[tuple[Doc, int]]:
    tokens = tokenize(query)
    if not tokens:
        return []
    hits = []
    for doc in docs:
        title, sub, text = normalize(doc.title), normalize(doc.subtitle), normalize(doc.text)
        score = 0
        for t in tokens:
            in_text = min(text.count(t), 8)
            if t not in title and t not in sub and not in_text:
                break
            score += (10 if t in title else 0) + (4 if t in sub else 0) + in_text
        else:
            hits.append((doc, score))
    return sorted(hits, key=lambda h: h[1], reverse=True)[:limit]
