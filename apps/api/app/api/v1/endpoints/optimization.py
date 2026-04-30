from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_optimization():
    return {'status': 'ok', 'network_component': 'optimization'}
