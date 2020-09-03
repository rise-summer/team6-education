import datetime
import os
import sys

from functools import wraps

from bson import json_util, ObjectId
import json

from flask import Flask, Response, request, jsonify, session, redirect, render_template
from flask_mongoengine import MongoEngine

import pymongo
from pymongo import MongoClient

HOST_NAME = 'localhost'

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'host': '127.0.0.1',
    'db': 'kumi'
}

kumi_mongo_client = MongoClient('localhost', 27017)
kumi_db = kumi_mongo_client.kumi
db = MongoEngine()
db.init_app(app)
try:
    db.get_db()
except pymongo.errors.OperationFailure as e:
    print(e)
    sys.exit(-1)

from models.course import course_api
app.register_blueprint(course_api)

app.secret_key = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5' # move to different file later

# Database
def login_required(f): # call this on any routes that require log in. Todo: make 3 separate versions called Student_Required, Teacher_Required, Admin_Required
  @wraps(f)
  def wrap(*args, **kwargs):
    if 'logged_in' in session:
      return f(*args, **kwargs)
    else:
      return redirect('/auth')
  
  return wrap

# Routes
from user import routes

@app.route('/auth')
def auth():
  return render_template('auth.html')

@app.route('/')
@login_required
def dashboard():
  session['user'] = kumi_db.users.find_one({ # need to do this every time we the render dashboard to stay updated in case something changes in database, such as another class is added to the student's courselist
    "_id": session['user']['_id']
  })

  courseIDs = session['user']['currentCourses']
  courses = []
  for courseID in courseIDs:
      curCourse = kumi_db.courses.find_one({ # need to do this every time we the render dashboard to stay updated in case something changes in database, such as another class is added to the student's courselist
        "_id": courseID
      })
      courses.append(curCourse)

  return render_template('dashboard.html', courses=courses)


@app.route('/profile/<uid>')
def profile(uid):

  user = kumi_db.users.find_one({
    "_id": uid
  })
  return render_template('profile.html', user=user)

#@app.route('/profile/<uid>', methods=['POST'])
#@login_required
#def editProfilePicture():

@app.route('/editprofile')
@login_required
def editProfileRender():

  return render_template('editProfile.html')

@app.route('/editprofile', methods=['POST'])
@login_required
def editProfile():

  kumi_db.users.update_one({"_id": session['user']['_id']},
    { 
      "$set": {
        "profilePhoto": "http://this-or-that.s3.amazonaws.com/" + request.form.get('file_name'),
        "firstName": request.form.get('firstName'),
        "lastName": request.form.get('lastName'),
        "phoneNumber": request.form.get('phoneNumber'),
        "email": request.form.get('email'),
        "externalLink": request.form.get('externalLink')
      }
    })

  session['user'] = kumi_db.users.find_one({ # need to do this every time we the render dashboard to stay updated in case something changes in database, such as another class is added to the student's courselist
    "_id": session['user']['_id']
  })

  return render_template('profile.html', user=session['user'])

# Route to fetch the submissions for a given student and an assignment
@app.route("/api/fetchSubmissions", methods=['GET'])
def submission():
    assignmentId = request.args.get('assignId')
    studentId = request.args.get('studentId')
    submission_collection = kumi_db.submissions
    submission_cursor = submission_collection.find({'assignId':assignmentId, 'studentId':studentId})
    submission_cursor_list = list(submission_cursor)
    submission_json = json_util.dumps(submission_cursor_list)
    return submission_json

@app.route("/api/fetchAssignments", methods=['GET'])
def assignments():
    courseId = request.args.get('courseId')
    assignment_collection = kumi_db.assignments
    assignment_cursor = assignment_collection.find({'courseID':courseId})
    assignment_cursor_list = list(assignment_cursor)
    assignment_json = json_util.dumps(assignment_cursor_list)
    return assignment_json

@app.route("/api/uploadAssignment")
def upload_assignment():
    return 0
