from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_metrics():
    return {'status': 'ok', 'network_component': 'metrics'}
