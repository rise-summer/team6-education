from flask import Flask, render_template, session, redirect
from functools import wraps
import pymongo

app = Flask(__name__)
app.secret_key = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5' # move to different file later

# Database
client = pymongo.MongoClient('localhost', 27017) # move to different file later
db = client.user_login_system # move to different file later

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
  session['user'] = db.users.find_one({ # need to do this every time we the render dashboard to stay updated in case something changes in database, such as another class is added to the student's courselist
    "_id": session['user']['_id']
  })

  courseIDs = session['user']['currentCourses']
  courses = []
  for courseID in courseIDs:
      curCourse = db.courses.find_one({ # need to do this every time we the render dashboard to stay updated in case something changes in database, such as another class is added to the student's courselist
        "_id": courseID
      })
      courses.append(curCourse)

  return render_template('dashboard.html', courses=courses)