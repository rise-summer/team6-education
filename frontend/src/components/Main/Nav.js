import React from 'react'
import styled from 'styled-components'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// import ProfileImage from '../../assets/images/profilelg.png'

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
`

const ProfileImg = styled.img`
    height: 2rem;
    margin: 0 1rem;
    cursor: pointer;
    border-radius: 50%;
`
/*
const MessageIcon = styled.span`
    color: ${({ theme }) => theme.colorGray}; 
    font-size: 27px;
    cursor: pointer;
`
*/
const NotificationsIcon = styled.span`
    color: ${({ theme }) => theme.colorGray}; 
    font-size: 27px;
    cursor: pointer;
`

const Nav = () => {
    return (
        <Container>
            <NotificationsIcon>  <NotificationsActiveIcon/>   </NotificationsIcon>
            
            <ProfileImg src={require('../../assets/images/prof-pic.png')} />
        </Container>
    )
}

export default Nav