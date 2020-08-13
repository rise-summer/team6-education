import React from 'react'
import styled from 'styled-components'
import CourseCard from '../CourseCard'
const Container = styled.div`

`

const Title = styled.h1`
    font-weight: 500;
    color:  ${({ theme }) => theme.textColor};
    font-size: 1.3rem;
    display: flex;
    align-items: center;
`

const CoursesCount = styled.div`
    margin-left: 1rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.headerNumber};
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`


const Courses = ({ title, data}) => {

    return (
        <Container>
            <Title>{title}</Title>
            {data.map(course => (
                <CourseCard 
                    data={course} 
                />
            ))}
            
        </Container>
    )
}

export default Courses
