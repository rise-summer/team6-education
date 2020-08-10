import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import NewCourseBtn from './NewCourseBtn'
import Courses from './Courses/Courses'
import CourseData from '../../CourseData.json'

const Container = styled.div`
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
    
`


const Main = () => {
    return (
        <Container>
            <Nav />
            <NewCourseBtn />
            <Courses title="Starred Courses" count={0} data={CourseData.starred} />
            <Courses title="Other Courses" count={8} data={CourseData.nonstarred} />
        </Container>
    )
}

export default Main
