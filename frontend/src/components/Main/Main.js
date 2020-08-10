import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import NewDepositBtn from './NewDepositBtn'
import Deposits from './Deposits/Deposits'
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
            <NewDepositBtn />
           
            <Deposits title="Starred Courses" count={0} data={CourseData.starred} />
            <Deposits title="Other Courses" count={8} data={CourseData.nonstarred} />
        </Container>
    )
}

export default Main
