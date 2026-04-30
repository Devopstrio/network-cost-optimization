from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_budgets():
    return {'status': 'ok', 'network_component': 'budgets'}
