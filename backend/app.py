import datetime
import os
from flask import Flask, Response, request, jsonify
from flask_mongoengine import MongoEngine


app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'host': os.environ['MONGODB_HOST'],
    'username': os.environ['MONGODB_USERNAME'],
    'password': os.environ['MONGODB_PASSWORD'],
    'db': 'webapp'
}

db = MongoEngine()
db.init_app(app)

class User(db.Document):
    firstName = db.StringField(max_length=60)
    lastName = db.StringField(max_length=60)
    email = db.EmailField()
    password = db.StringField()
    phoneNumber = db.StringField()
    gender = db.StringField()
    profilePhoto = db.StringField()
    currentGrade = db.StringField()
    type =  db.StringField()
    currentCourses = db.ListField(db.ReferenceField('Course'))

class Course(db.Document): 
    # courseId = db.StringField()
    title = db.StringField()
    year = db.IntField()
    description = db.StringField()
    prerequisites = db.ListField(db.ReferenceField('self'))
    teacher = db.ReferenceField(User)
    enrolledStudents = db.ListField(db.ReferenceField('User'))
    timeAdded = db.DateTimeField()
    startDate = db.DateTimeField()
    endDate = db.DateTimeField()
    recurring = db.BooleanField()

@app.route("/addUser", methods=['POST'])
def addUser():
    # User.objects().delete()
    data= request.get_json()
    print("Before Inserting, Data: ", data)
    user = User(
        firstName=data['firstName'],
        lastName=data['lastName'],
        email=data['email'],
        password=data['password'],
        phoneNumber=data['phoneNumber'],
        gender=data['gender'],
        currentGrade=data['currentGrade'],
        type=data['type'] ).save()
    
    print("After Inserting, user: ", user)
    # print("To mongo method", todos[0].ref.to_mongo())
    
    # print("after querying ref's type is ", todos[0].ref.taskTitle)
    # return Response(jsonify(todos), mimetype="application/json", status=200)
    return jsonify(user)

@app.route("/addCourse", methods=['POST'])
def addCourse():
    data = request.get_json()
    course = Course(
        title = data['title'],
        year = data['year'],
        description = data['description'],
        teacher = data['teacher']        
    ).save()
    return jsonify(course)    

@app.route("/getCourses/<userId>", methods=['GET'])
def getCourses(userId):
    print("user id is ", userId)
    user = User.objects().only('currentCourses').with_id(userId)
    return jsonify(user["currentCourses"])

if __name__ == "__main__":
    app.run(debug=True, port=5000)