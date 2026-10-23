"""Reads the same /content folder the front end is built from."""

import os
import re
from dataclasses import dataclass, field
from functools import cache
from pathlib import Path

import yaml

CONTENT_DIR = Path(os.environ.get("CONTENT_DIR", Path(__file__).resolve().parents[4] / "content"))

FRONTMATTER = re.compile(r"^---\r?\n(.*?)\r?\n---\r?\n?", re.DOTALL)
DATE_PREFIX = re.compile(r"^\d{4}-\d{2}-\d{2}-")


@dataclass
class Doc:
    url: str
    type: str
    title: str
    subtitle: str = ""
    text: str = ""
    meta: dict = field(default_factory=dict)


def parse(source: str) -> tuple[dict, str]:
    match = FRONTMATTER.match(source)
    if not match:
        return {}, source
    return yaml.safe_load(match.group(1)) or {}, source[match.end() :]


def plain_text(markdown: str) -> str:
    text = re.sub(r"```.*?```", " ", markdown, flags=re.DOTALL)
    text = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", text)
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"[#>*_`~|-]+", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def _markdown_files(folder: str):
    for path in sorted((CONTENT_DIR / folder).glob("*.md")):
        if path.name == "README.md" or path.name.startswith("_"):
            continue
        meta, body = parse(path.read_text())
        yield DATE_PREFIX.sub("", path.stem), meta, body


@cache
def brain_log() -> list[Doc]:
    entries = [
        Doc(
            url=f"/brain-log/{slug}",
            type="Brain log",
            title=str(meta.get("title", slug)),
            subtitle=str(meta.get("date", "")),
            text=plain_text(body),
            meta=meta,
        )
        for slug, meta, body in _markdown_files("brain-log")
        if not meta.get("draft")
    ]
    return sorted(entries, key=lambda d: d.subtitle, reverse=True)


@cache
def book_notes() -> list[Doc]:
    return [
        Doc(
            url=f"/books/{slug}",
            type="Book notes",
            title=str(meta.get("title", slug)),
            subtitle=f"{meta.get('author', '')} · {meta.get('tier', '')}",
            text=plain_text(body),
            meta=meta,
        )
        for slug, meta, body in _markdown_files("books")
    ]


def all_docs() -> list[Doc]:
    return brain_log() + book_notes()
