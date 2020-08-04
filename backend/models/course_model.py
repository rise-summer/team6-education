import datetime
from app import db 

class Course(db.Document):
    class_id = db.IntField()
    code = db.StringField(max_length=20)
    title = db.StringField(max_length=60)
    instructor = db.StringField(max_length=60)
    school = db.StringField(max_length=60)
    pub_date = db.DateTimeField(default=datetime.datetime.now)

"""
class Course(db.Document):
    class_id = db.IntField()
    code = db.StringField(max_length=20)
    title = db.StringField(max_length=60)
    year = db.IntField()
    description = db.StringField(max_length=200)
    prerequisites = db.ListField(db.IntField())
    teacher = db.IntField()
    enrolled_students = db.ListField(db.IntField())
    time_added = db.DateTimeField(default=datetime.datetime.now)
    start_date = db.DateTimeField() 
    end_date = db.DateTimeField() 
    recurring = db.BooleanField()
"""
