import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'
import DashboardIcon from '@material-ui/icons/Dashboard';
import FolderIcon from '@material-ui/icons/Folder';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FileCopyIcon from '@material-ui/icons/FileCopy';


const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuLink title={<DashboardIcon/> }/>
            <MenuLink title={<FolderIcon/>} active />
            <MenuLink title={<CalendarTodayIcon/>}/>
            <MenuLink title={<FileCopyIcon/>}/>
        </Container>
    )
}

export default Menu