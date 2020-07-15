# Description

### Problem:

After the transition to online learning due to COVID-19, a lot of lower income schools, particularly middle and high schools, have been impacted negatively largely due to not having a set online platform for students. These schools particularly can not afford specific platforms like Blackboard or Canvas. So, schools have been using emails, zoom, Microsoft Teams etc to make up for this, however, these come with their own set of issues such as not being personalized to a school, technical problems/difficulties etc.

### Solution:

A free or low-cost alternative to learning management systems like Blackboard. This would be personalised (to a specific degree) to each school. Technical support teams would also work directly with each school to provide a personalised experience. Initial trainings would be included free of cost to familiarize students and teachers to the interface as well.

### Users:

Low income schools all over the world.

Three types of users:

1. Student
2. Teacher
3. Administrator
4. Parent (Stage 2)

### Features:

**First stage features:**

1. Login page
    1. Automatically detecting student vs. teacher vs. administrator user
2. Dashboard
    1. Student: class schedule and links to the online classes
    2. Teacher: class schedule, editing class links/comments
3. Class page: Details of each specific class, syllabus, assignments
4. Assignment submission page:
    1. Student: assignment requirements, uploading assignment, deadline
    2. Teacher: uploading requirements/deadline, submissions overview, downloading assignments
5. Grade page
    1. Student: view grade by class and assignment
    2. Teacher: enter grades
6. Administrator homepage
    1. Assigning teachers to students
    2. Attendance record (?)

**Second stage:**

1. Quiz/Test page: Like assignment page but with specific question/answer slots
    1. Student: input answers
    2. Teacher: put in restrictions, questions
2. Discussion Board: For classes with discussion elements
3. Email feature: Directly emailing a teacher or student(s)

**(Potential) Third stage**

1. Built in video platform linked with discussion board

# How to run Developer environment

## Prequisites

Install these dependencies

- Docker
- Node.js + NPM
- Python 3

## Running a development build

Use `docker-compose up -d` to start the docker image.

To access the front end go to localhost:3000. Changes should automatically hot reload when you update the code.

Before accessing the API we need to create a non root user for the MongoDB database:

```
docker exec -it mongo bash
mongo -u admin -p
use webapp
db.createUser({user: 'apiuser', pwd: 'apipassword', roles: [{role: 'readWrite', db: 'webapp'}]})
```

Then to access the backend boilerplate API go to localhost:5000/api.
