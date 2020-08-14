from datetime import datetime
from random import randint
from models.course import Course

"""
def rand_course():
    return {
        "course_id": randint(0, 20000) 
        "instructor": randint(100, 200)
    }
"""

def test_get_course(client):
    Course.objects().delete()

    response = client.get("/api/class/10000")
    assert response.status_code == 404

    course = {"course_id": 10000,
              "title": "Geometric and Topological Data Analysis",
              "description": "The goal of this course is to cover the rudiments of geometric and topological methods that have proven useful in the analysis of geometric data, using classical as well as deep learning approaches.",
              "instructor": 100,
              "prerequisites": [9001, 9002],
              "enrolled_students": list(range(500, 530)),
              "recurring": False,
              "start_date": datetime(2000, 1, 1), 
              "end_date": datetime(2000, 4, 1),
              "year": 2000,
              "time_added": datetime.now()
            }
    Course(**course).save()

    response = client.get("/api/class/10000") 
    assert response.status_code == 200
    data = response.get_json()
    assert data['course_id'] == course['course_id']
    assert data['title'] == course['title']
    assert data['description'] == course['description']
    assert data['instructor'] == course['instructor']
    assert data['prerequisites'] == course['prerequisites']
    assert data['enrolled_students'] == course['enrolled_students']
    assert data['recurring'] == course['recurring']
    assert data['year'] == course['year']

    response = client.get("/api/class/10001")
    assert response.status_code == 404

    Course.objects().delete()

def test_add_course(client):
    Course.objects().delete()

    c = {
        "course_id": 10001,
        "title": "Convolutional Neural Networks for Visual Recog",
        "description": "This course is a deep dive into details of the deep learning architectures.",
        "instructor": 201,
        "start_date": "2000-01-01",
        "end_date": "2000-04-01"
    }
    response = client.post("/api/class/add", json=c)
    assert response.status_code == 200

    response = client.get("/api/class/10001")
    assert response.status_code == 200
    data = response.get_json()
    assert data['instructor'] == c['instructor'] 
    assert data['title'] == c['title'] 
    assert data['description'] == c['description']
    assert data['prerequisites'] == []
    assert data['enrolled_students'] == []
    assert data['year'] == 2000

    c2 = {
        "course_id": 11001,
        "title": "Coding for Social Good",
        "description": "Survey course on applications of fundamental computer science concepts to problems in the social good space.",
        "instructor": 470,
        "start_date": "1daf932df",
        "end_date": "2009-06-01"
    }
    response = client.post("/api/class/add", json=c2)
    assert response.status_code == 400

    response = client.get("/api/class/11001")
    assert response.status_code == 404

    Course.objects().delete()

def test_delete_course(client):
    Course.objects().delete()

    client.post("/api/class/add", json={
        "course_id": 20000,
        "title": "Introduction to Computers",
        "description": "",
        "instructor": 500,
        "start_date": "2016-09-01",
        "end_date": "2016-12-01"
    })

    response = client.get("/api/class/20000")
    assert response.status_code == 200

    response = client.get("/api/class/delete/20000")
    assert response.status_code == 200

    response = client.get("/api/class/20000")
    assert response.status_code == 404

    Course.objects.delete()
