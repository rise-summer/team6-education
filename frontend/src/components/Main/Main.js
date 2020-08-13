import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import NewCourseBtn from './NewCourseBtn'
import Courses from './Courses/Courses'
import CourseData from '../../CourseData.json'

const Container = styled.div`
    margin-left: 6rem;
    display: inline;
    float: left;
    padding: 0 4rem;
    
`


const Main = () => {
    return (
        <Container>
            <Nav />
            
            <Courses title="Courses" data={CourseData} />
            
        </Container>
    )
}

export default Main
