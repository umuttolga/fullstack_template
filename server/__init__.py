from flask import current_app
from models import db

# Create the database and tables
db.create_all()
