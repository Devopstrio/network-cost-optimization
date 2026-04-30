from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, network, optimization, forecast, budgets, dashboard, metrics
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(network.router, prefix="/network", tags=["network"])
api_router.include_router(optimization.router, prefix="/optimization", tags=["optimization"])
api_router.include_router(forecast.router, prefix="/forecast", tags=["forecast"])
api_router.include_router(budgets.router, prefix="/budgets", tags=["budgets"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
api_router.include_router(metrics.router, prefix="/metrics", tags=["metrics"])
