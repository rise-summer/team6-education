import datetime
import os
import sys

import pymongo
from flask import Flask, Response, request
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
try:
    db.get_db()
except pymongo.errors.OperationFailure as e:
    print(e)
    sys.exit(-1)


from models.course import course_api 
app.register_blueprint(course_api)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
