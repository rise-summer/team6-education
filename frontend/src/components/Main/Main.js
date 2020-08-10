import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import NewCourseBtn from './NewCourseBtn'
import Courses from './Courses/Courses'
import CourseData from '../../CourseData.json'

const Container = styled.div`
    margin-left: 6rem;
    position: relative;
    padding: 0 4rem;
    
`


const Main = () => {
    return (
        <Container>
            <Nav />

            <Courses title="Courses" count={3} data={CourseData.starred} />
            
        </Container>
    )
}

export default Main
