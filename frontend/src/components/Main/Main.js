import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import NewCourseBtn from './NewCourseBtn'
import Courses from './Courses/Courses'
import CourseData from '../../CourseData.json'

const Container = styled.div`
    margin-left: 13rem;
    margin-top: 4rem;
    display: inline;
    float: left;
    padding: 0 4rem;
    
`


const Main = () => {
    return (
        <Container>
        
            <Courses title="Courses" data={CourseData} />
            
        </Container>
    )
}

export default Main
