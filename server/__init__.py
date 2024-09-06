from flask import Flask
from app import app
from models import db

# Create the database and tables
with app.app_context():
    db.drop_all()
    db.create_all()
