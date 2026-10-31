"""
MedLabel AI — Vercel and Production Entrypoint
Exports the FastAPI app instance from server.py
"""

from fastapi import FastAPI
from server import app

# Export app for Vercel serverless runtime
__all__ = ["app"]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
