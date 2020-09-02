import React from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'
import Profile from './Profile'


const Container = styled.div`
    background-color: #FFFFFF;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;


`

const Sidebar = () => {

    return (
        <Container>
            <Profile />
            <Menu />
           
        </Container>
    )
}

export default Sidebar
