import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import NewDepositBtn from './NewDepositBtn'
import Deposits from './Deposits/Deposits'
import DepositData from '../../DepositData.json'

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
           
            <Deposits title="Starred Courses" count={0} data={DepositData.starred} />
            <Deposits title="Other Courses" count={8} data={DepositData.nonstarred} />
        </Container>
    )
}

export default Main
