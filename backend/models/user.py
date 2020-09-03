from app import db 
from flask import Blueprint, Response

class User(db.Document):
    first_name = db.StringField(max_length=60)
    last_name = db.StringField(max_length=60)
    email = db.StringField(max_length=60)
    password = db.StringField(max_length=30)
    user_group = db.IntField()
    courses = db.ListField(db.IntField())

user_api = Blueprint("user_api", __name__)

@user_api.route("/api/user/<int:user_id>", methods=["GET"])
def get_user(user_id):
    try:
        user = User.objects.get(user_id=user_id)
        return Response(user.to_json(), mimetype="application/json",
                        status=200)
    except User.DoesNotExist:
        return Response("User does not exist", status=404)
