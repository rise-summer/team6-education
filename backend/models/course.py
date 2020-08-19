from datetime import datetime
from random import randint
from app import db 
from flask import Blueprint, Response, request, jsonify

class Announcement(db.EmbeddedDocument):
    text = db.StringField(required=True)
    date = db.DateTimeField(default=datetime.now())

class Course(db.Document):
    """Modeling of a course object. 

    course_id:          integer
    title:              string
    year:               integer
    description:        string
    prerequisites:      list(integer), list of course ids
    instructor:         integer, instructor's user id
    enrolled_students:  list of students' user ids
    time_added:         datetime, 
                        timestamp of the course added to the system
    start_date:         datetime 
    end_date:           datetime
    recurring:          boolean, is a recurring course (or not)
    announcements:      list of announcements
    """

    course_id = db.IntField(required=True)
    #code = db.StringField(max_length=20)
    title = db.StringField(max_length=60, required=True)
    year = db.IntField(required=True)
    description = db.StringField(required=True)
    prerequisites = db.ListField(db.IntField())
    instructor = db.IntField(required=True)
    #school = db.StringField(max_length=60)
    enrolled_students = db.ListField(db.IntField())
    time_added = db.DateTimeField(default=datetime.now())
    start_date = db.DateTimeField(required=True)
    end_date = db.DateTimeField(required=True)
    recurring = db.BooleanField(required=True)
    announcements = db.ListField(db.EmbeddedDocumentField(Announcement))

course_api = Blueprint("course_api", __name__)

@course_api.route("/api/class", methods=["GET"])
def get_courses():
    """Get all courses."""
    courses = [{"course_id": c["course_id"],
        "title": c["title"]} for c in Course.objects()]
    return jsonify(courses), 200

@course_api.route("/api/class/<int:course_id>", methods=["GET"])
def get_course(course_id):
    """Request for information of a course.
    
    course_id: the id of specified course  
    
    If the course exists, return a json-encoded string with code 200.
    Otherwise, return an error message with code 404.

    Todo's: 
        - Make use of sessions to determine what to return.
    """

    try:
        course = Course.objects.get(course_id=course_id)
        return Response(course.to_json(), mimetype="application/json",
                        status=200)
    except Course.DoesNotExist:
        return Response("Class does not exist.", status=404)

@course_api.route("/api/class/add", methods=["POST"])
def add_course():
    """Adding a course, supporting with course information in JSON.
    
    title:              string
    description:        string
    prerequisites:      list(integer)
    enrolled_students:  list(integer)
    instructor:         integer
    start_date:         string, datetime formatted
    end_date:           string, datetime formatted
    recurring:          boolean 

    Todo's:
        - Check for user permission.
        - Validate the input.
    """
    
    data = request.get_json()

    course = {"course_id": data.get('course_id', randint(0, 20000)),
              "title": data.get('title', ''),
              "description": data.get('description', ''),
              "instructor": data.get('instructor', None),
              "prerequisites": data.get('prerequisites', []),
              "enrolled_students": data.get('enrolled_students', []),
              "recurring": data.get('recurring', False),
              "announcements": data.get('announcements', [])}

    start_date = data.get('start_date', None)
    end_date = data.get('end_date', None)
    if start_date and end_date:
        try:
            course["start_date"] = datetime.strptime(start_date, '%Y-%m-%d')
            course["end_date"] = datetime.strptime(end_date, '%Y-%m-%d')
            course["year"] = course["start_date"].year
        except ValueError:
            return jsonify({"error": -1, "msg": "Invalid JSON format."}), 400
    else:
        return jsonify({"error": -1, "msg": "Invalid JSON format."}), 400 
    
    """
    course = Course(course_id=course_id,
                    title=title,
                    description=description,
                    instructor=instructor,
                    prerequisites=prerequisites,
                    enrolled_students=enrolled_students,
                    start_date=start_date,
                    end_date=end_date,
                    year=year,
                    recurring=recurring,
                    time_added=datetime.now())
    """
    Course(**course).save()

    return jsonify({"error": 0, 
                 "msg": "Successfully added the course."}), 200 

@course_api.route("/api/class/delete/<int:course_id>", methods=["GET"])
def delete_course(course_id):
    """Removing a course by given course id.

    course_id:  integer
    
    Todo's: 
        - Check for user permission.
    """

    try:
        course = Course.objects.get(course_id=course_id)
        course.delete()
        return jsonify({"error": 0, 
            "msg": "Successfully removed the course."}), 200
    except Course.DoesNotExist:
        return Response("Course does not exist.", status=404)

@course_api.route("/api/class/update/<int:course_id>", methods=["POST"])
def update_course(course_id):
    """Updating a course by given course id.

    course_id:  integer
    """

    try:
        data = request.get_json()
        course = Course.objects.get(course_id=course_id)
        course.update(**data)
        return jsonify({"error": 0, 
            "msg": "Successfully updated the course."}), 200
    except Course.DoesNotExist:
        return Response("Course does not exist.", status=404)

@course_api.route("/api/class/<int:course_id>/announcement", methods=["GET"])
def get_course_announcement(course_id):
    """Getting all announcements by given course id.

    course_id: integer
    """
    
    try:
        course = Course.objects.get(course_id=course_id)
        return jsonify({"course_id": course_id, 
            "announcements": course["announcements"]}), 200
    except Course.DoesNotExist:
        return Response("Course does not exist.", status=404)

@course_api.route("/api/class/<int:course_id>/announcement/add", methods=["POST"])
def add_course_announcement(course_id):
    """Adding an announcement by given course id.
    
    course_id:  integer
    text:       string
    """

    try:
        data = request.get_json()
        a = Announcement(text=data.get('text', ''))
        course = Course.objects().get(course_id=course_id)
        course.announcements.append(a)
        course.save()
        return jsonify({"error": 0, 
            "msg": "Successfully added the announcement."}), 200
    except Course.DoesNotExist:
        return Response("Course does not exist.", status=404) 

@course_api.route("/api/class/<int:course_id>/announcement/delete/<int:a_id>", methods=["GET"])
def delete_course_announcement(course_id, a_id):
    """Removing an announcement by given course id and
    announcement id
   
    course_id:  integer
    a_id:       integer, have the same order as the list of announcements
                stored at a Course object
    """

    try:
        course = Course.objects().get(course_id=course_id)
        course.announcements.pop(a_id)
        course.save()
        return jsonify({"error": 0, 
            "msg": "Successfully added the announcement."}), 200
    except Course.DoesNotExist:
        return Response("Course does not exist.", status=404) 
    except IndexError:
        return Response("Invalid announcement id.", status=404) 
