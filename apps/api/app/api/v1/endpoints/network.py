from fastapi import APIRouter
router = APIRouter()
@router.get('/cost')
def get_network_cost():
    return {'total_network_spend': 42500.50, 'egress_cost': 28500.00, 'nat_gw_cost': 8200.50, 'period': '2026-04'}
@router.get('/flows')
def get_network_flows():
    return {'flows': [{'source': 'vpc-prod', 'destination': 'internet', 'bytes': 150000000000, 'cost': 1350.00}]}
