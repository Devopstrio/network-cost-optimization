from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_forecast():
    return {'status': 'ok', 'network_component': 'forecast'}
