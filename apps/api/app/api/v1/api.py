from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, windows, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(windows.router, prefix="/windows", tags=["windows"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
