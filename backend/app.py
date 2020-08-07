import datetime
import os
import pymongo
from bson import json_util, ObjectId
import json

from flask import Flask, Response, request, jsonify
from flask_mongoengine import MongoEngine
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


# Route to fetch the submissions for a given student and an assignment
@app.route("/fetchSubmissions", methods=['GET'])
def submission():
    assignmentId = request.args.get('assignId')
    studentId = request.args.get('studentId')
    submission_collection = kumi_db.submissions
    submission_cursor = submission_collection.find({'assignId':assignmentId, 'studentId':studentId})
    submission_cursor_list = list(submission_cursor)
    submission_json = json_util.dumps(submission_cursor_list)
    return submission_json

@app.route("/fetchAssignments", methods=['GET'])
def assignments():
    courseId = request.args.get('courseId')
    assignment_collection = kumi_db.assignments
    assignment_cursor = assignment_collection.find({'courseID':courseId})
    assignment_cursor_list = list(assignment_cursor)
    assignment_json = json_util.dumps(assignment_cursor_list)
    return assignment_json

@app.route("/uploadAssignment")
def upload_assignment():
    return 0

if __name__ == "__main__":
    app.run(debug=True, port=5000)