from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_windows():
    return {'status': 'ok'}
@router.post('/create')
def create_window():
    return {'status': 'ok'}
@router.post('/execute')
def execute_window():
    return {'status': 'ok'}
@router.get('/status')
def window_status():
    return {'status': 'ok'}
@router.post('/rollback')
def rollback_window():
    return {'status': 'ok'}
