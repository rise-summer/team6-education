import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'


const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuLink title="Overview" icon={'home'}/>
            <MenuLink title="Courses" icon={'file-multiple'} active />
            <MenuLink title="Grades" icon={'gift'}/>
            <MenuLink title="Settings" icon={'cog'} />
        </Container>
    )
}

export default Menu