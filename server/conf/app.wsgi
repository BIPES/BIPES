import sys
sys.path.insert(0, '/srv/www/bipes3')

from app import create_app

application = create_app()
