from models.course import Course

def test_course(client):
    Course.objects().delete()

    response = client.get("/api/class/10000")
    assert response.status_code == 404 
    
    Course(course_id=10000, code="CS 100",
           title="Introduction to Programming", 
           instructor="Tony Brown", school="Cheery University").save()
    Course(course_id=10001, code="STATS 202",
           title="Game Theory", 
           instructor="Kelly Johnson", school="Banana University").save()
    Course(course_id=10002, code="PE 50",
           title="Yoga", 
           instructor="Anthony Smith", school="University of Mars").save()
    Course(course_id=10003, code="CHEM 2A",
           title="Organic Chemistry", 
           instructor="Albert Frankenstein", school="Pacific University").save()
    Course(course_id=10004, code="CS 3001",
           title="Advanced Topics in Cybersecurity", 
           instructor="Donny Shayari", school="College of Eureka").save()

    response = client.get("/api/class/10000")
    assert response.status_code == 200

    Course.objects().delete()
