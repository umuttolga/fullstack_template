from flask_restful import Resource, reqparse
from models import User, db
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import check_password_hash
from flask import jsonify

user_parser = reqparse.RequestParser()
user_parser.add_argument('name', type=str, help="Name cannot be blank!")
user_parser.add_argument('email', type=str, required=True, help="Email cannot be blank!")
user_parser.add_argument('password', type=str,required=True, help="Password cannot be blank!")

class UserResource(Resource):
    method_decorators = [jwt_required()]

    def get(self, user_id):
        user = User.query.get_or_404(user_id)
        return {'id': user.id, 'name': user.name, 'email': user.email}

    def put(self, user_id):
        args = user_parser.parse_args()
        user = User.query.get_or_404(user_id)
        user.name = args['name']
        user.email = args['email']
        db.session.commit()
        return {'message': 'User updated successfully'}

    def delete(self, user_id):
        user = User.query.get_or_404(user_id)
        db.session.delete(user)
        db.session.commit()
        return {'message': 'User deleted successfully'}

class UserListResource(Resource):
    @jwt_required()
    def get(self):
        users = User.query.all()
        return [{'id': user.id, 'name': user.name, 'email': user.email} for user in users]

    def post(self):
        args = user_parser.parse_args()
        new_user = User(name=args['name'], email=args['email'])
        new_user.set_password(args['password'])
        db.session.add(new_user)
        db.session.commit()
        return {'message': 'User created successfully'}, 201


class AuthResource(Resource):
  def post(self):
      args = user_parser.parse_args()
    #   print(args["password"])
      user = User.query.filter_by(email=args['email']).first_or_404()
      if user and user.check_password(args['password']):
        access_token = create_access_token(identity=user.id)
        return jsonify(access_token=access_token)
      return {"message": "Invalid Credentials"}