from flask_restful import Resource, reqparse
from models import User, db

user_parser = reqparse.RequestParser()
user_parser.add_argument('name', type=str, required=True, help="Name cannot be blank!")
user_parser.add_argument('email', type=str, required=True, help="Email cannot be blank!")

class UserResource(Resource):
    def get(self, user_id):
          # Local import to avoid circular dependency
        user = User.query.get_or_404(user_id)
        return {'id': user.id, 'name': user.name, 'email': user.email}

    def put(self, user_id):
          # Local import to avoid circular dependency
        args = user_parser.parse_args()
        user = User.query.get_or_404(user_id)
        user.name = args['name']
        user.email = args['email']
        db.session.commit()
        return {'message': 'User updated successfully'}

    def delete(self, user_id):
          # Local import to avoid circular dependency
        user = User.query.get_or_404(user_id)
        db.session.delete(user)
        db.session.commit()
        return {'message': 'User deleted successfully'}

class UserListResource(Resource):
    def get(self):
        users = User.query.all()
        return [{'id': user.id, 'name': user.name, 'email': user.email} for user in users]

    def post(self):
          # Local import to avoid circular dependency
        args = user_parser.parse_args()
        new_user = User(name=args['name'], email=args['email'])
        db.session.add(new_user)
        db.session.commit()
        return {'message': 'User created successfully'}, 201
