# Build from the repo root so the content folder is available:
#   docker build -f apps/api/Dockerfile -t dreamsncodes-api .
FROM python:3.13-slim
COPY --from=ghcr.io/astral-sh/uv:0.11 /uv /bin/uv
WORKDIR /app/apps/api
COPY apps/api/pyproject.toml apps/api/uv.lock ./
RUN uv sync --frozen --no-dev --no-install-project
COPY apps/api/src ./src
COPY content /app/content
ENV CONTENT_DIR=/app/content PORT=8080
CMD ["sh", "-c", "uv run --no-dev fastapi run src/api/main.py --port $PORT"]
