import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import NewDepositBtn from './NewDepositBtn'
import Deposits from './Deposits/Deposits'
import depositData from '../../DepositData.json'
import CourseCard from './CourseCard'

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`


const Main = () => {
    return (
        <Container>
            <Nav />
            <NewDepositBtn />
            <Deposits title="Starred Courses" count={0} data={depositData.starred} />
            <Deposits title="Other Courses" count={8} data={depositData.nonstarred} />
        </Container>
    )
}

export default Main
