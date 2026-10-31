"""
MedLabel AI — Vercel Serverless Function Entrypoint
Routes all /api calls to the FastAPI app instance
"""
import sys
import os
from fastapi import FastAPI

# Ensure the root directory is on the Python path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from server import app

# Export app for Vercel
__all__ = ["app"]
