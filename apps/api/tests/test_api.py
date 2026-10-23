from fastapi.testclient import TestClient

from api.main import app

client = TestClient(app)


def test_health():
    assert client.get("/api/health").json() == {"status": "ok"}


def test_brain_log_is_newest_first():
    entries = client.get("/api/brain-log").json()
    assert entries
    dates = [e["date"] for e in entries]
    assert dates == sorted(dates, reverse=True)


def test_search_finds_book_notes():
    hits = client.get("/api/search", params={"q": "meditations"}).json()
    assert hits[0]["url"] == "/books/meditations"


def test_search_requires_every_word():
    assert client.get("/api/search", params={"q": "marcus zzzzqq"}).json() == []


def test_search_rejects_empty_query():
    assert client.get("/api/search", params={"q": ""}).status_code == 422
