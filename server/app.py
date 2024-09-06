from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from config import Config
from models import db
from flask_cors import CORS
from flask_jwt_extended import JWTManager
app = Flask(__name__)
app.config.from_object(Config)

api = Api(app)
CORS(app)
db.init_app(app)
jwt = JWTManager(app)
from resources import UserResource, UserListResource, AuthResource

api.add_resource(UserListResource, '/users')
api.add_resource(UserResource, '/user/<int:user_id>')
api.add_resource(AuthResource, '/login')

if __name__ == '__main__':
    app.run(debug=True)
