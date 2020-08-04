import datetime
from app import db 
from flask import Blueprint, Response

class Course(db.Document):
    course_id = db.IntField()
    code = db.StringField(max_length=20)
    title = db.StringField(max_length=60)
    instructor = db.StringField(max_length=60)
    school = db.StringField(max_length=60)
    pub_date = db.DateTimeField(default=datetime.datetime.now)

course_api = Blueprint("course_api", __name__)

@course_api.route("/api/class/<int:course_id>", methods=["GET"])
def get_course(course_id):
    try:
        course = Course.objects.get(course_id=course_id)
        return Response(course.to_json(), mimetype="application/json",
                        status=200)
    except Course.DoesNotExist:
        return Response("Class does not exist", status=404)
