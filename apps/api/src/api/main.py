from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from . import content
from .search import search

app = FastAPI(title="dreamsn.codes API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://dreamsn.codes", "https://dreamsncodes.com", "http://localhost:5173"],
    allow_methods=["GET"],
)


class Entry(BaseModel):
    url: str
    title: str
    date: str
    tags: list[str]


class Hit(BaseModel):
    url: str
    type: str
    title: str
    subtitle: str
    score: int


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/api/brain-log")
def brain_log() -> list[Entry]:
    return [
        Entry(url=d.url, title=d.title, date=d.subtitle, tags=d.meta.get("tags", []))
        for d in content.brain_log()
    ]


@app.get("/api/search")
def search_site(q: str = Query(min_length=1, max_length=200), limit: int = Query(20, le=50)) -> list[Hit]:
    return [
        Hit(url=d.url, type=d.type, title=d.title, subtitle=d.subtitle, score=score)
        for d, score in search(content.all_docs(), q, limit)
    ]
