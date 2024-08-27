from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from config import Config
from models import db
from flask_cors import CORS
app = Flask(__name__)
app.config.from_object(Config)

api = Api(app)
CORS(app)
db.init_app(app)
from resources import UserResource, UserListResource

api.add_resource(UserListResource, '/users')
api.add_resource(UserResource, '/users/<int:user_id>')

if __name__ == '__main__':
    app.run(debug=True)
