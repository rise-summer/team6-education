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

def test_update_course(client):
    Course.objects().delete()
    
    title1 = "Introduction to Biology"
    title2 = "Introduction to Physics"
    description = "Newton's Laws of Motion"

    client.post("/api/class/add", json={
        "course_id": 20000,
        "title": title1, 
        "description": "",
        "instructor": 500,
        "start_date": "2016-09-01",
        "end_date": "2016-12-01"
    })

    r = client.get("/api/class/20000")
    assert r.get_json()["title"] == title1

    r = client.post("/api/class/update/20000", 
            json={"title": title2, "description": description})
    assert r.status_code == 200

    r = client.get("/api/class/20000")
    course = r.get_json()
    assert course["title"] == title2
    assert course["description"] == description

    r = client.post("/api/class/update/10000", json={"title": title1})
    assert r.status_code == 404

    Course.objects().delete()

def test_get_courses(client):
    Course.objects().delete()

    client.post("/api/class/add", json={
        "course_id": 20000,
        "title": "Introduction to Computers",
        "description": "",
        "instructor": 500,
        "start_date": "2016-09-01",
        "end_date": "2016-12-01"
    })

    client.post("/api/class/add", json={
        "course_id": 10000,
        "title": "Introduction to Biology",
        "description": "",
        "instructor": 300,
        "start_date": "2016-09-01",
        "end_date": "2016-12-01"
    })

    r = client.get("/api/class")
    assert r.status_code == 200
    data = r.get_json()
    assert len(data) == 2
    ids = [c["course_id"] for c in data]
    assert 10000 in ids and 20000 in ids

    Course.objects().delete()

def test_add_course_announcement(client):
    Course.objects().delete()

    client.post("/api/class/add", json={
        "course_id": 20000,
        "title": "Introduction to Computers",
        "description": "",
        "instructor": 500,
        "start_date": "2016-09-01",
        "end_date": "2016-12-01"
    })

    text = "Welcome to the course ABC!"
    text2 = "Welcome to the course XYZ!"

    response = client.post("/api/class/20000/announcement/add", 
                           json={"text": text})
    assert response.status_code == 200
    
    response = client.post("/api/class/20000/announcement/add", 
                           json={"text": text2})
    assert response.status_code == 200

    response = client.get("/api/class/20000")
    assert text == response.get_json()['announcements'][0]['text']    
    assert text2 == response.get_json()['announcements'][1]['text']
    
    response = client.post("/api/class/10000/announcement/add",
                           json={"text": text})
    assert response.status_code == 404

    Course.objects().delete()

def test_delete_course_announcement(client):
    Course.objects().delete()

    client.post("/api/class/add", json={
        "course_id": 20000,
        "title": "Introduction to Computers",
        "description": "",
        "instructor": 500,
        "start_date": "2016-09-01",
        "end_date": "2016-12-01"
    })
    
    msgs = ["This is an easy class.",
            "This class is tough.",
            "This is an OK class.",
            "This class is taught by Mr. Musk."]

    for m in msgs:
        client.post("/api/class/20000/announcement/add", 
                    json={"text": m})
    
    r = client.get("/api/class/20000/announcement/delete/4")
    assert r.status_code == 404

    r = client.get("/api/class/20000/announcement/delete/2")
    assert r.status_code == 200

    r = client.get("/api/class/20000")
    announcements = r.get_json()["announcements"]
    assert len(announcements) == 3
    assert announcements[0]["text"] == msgs[0]
    assert announcements[1]["text"] == msgs[1]
    assert announcements[2]["text"] == msgs[3]

    r = client.get("/api/class/20000/announcement/delete/0")
    assert r.status_code == 200

    r = client.get("/api/class/20000/announcement/delete/0")
    assert r.status_code == 200

    r = client.get("/api/class/20000")
    assert r.get_json()["announcements"][0]["text"] == msgs[3]

    r = client.get("/api/class/10000/announcement/delete/10")
    assert r.status_code == 404

    Course.objects().delete()

def test_get_course_announcements(client):
    Course.objects().delete()
    
    r = client.get("/api/class/20000/announcement")
    assert r.status_code == 404
 
    client.post("/api/class/add", json={
        "course_id": 20000,
        "title": "Introduction to Computers",
        "description": "",
        "instructor": 500,
        "start_date": "2016-09-01",
        "end_date": "2016-12-01"
    })
 
    msgs = ["This is an easy class.",
            "This class is tough.",
            "This is an OK class.",
            "This class is taught by Mr. Musk."]

    for m in msgs:
        client.post("/api/class/20000/announcement/add", 
                    json={"text": m})

    r = client.get("/api/class/20000/announcement")
    assert r.status_code == 200
    assert msgs == [a["text"] for a in r.get_json()["announcements"]]
