import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    border-left: 3px solid #66C500 ${props => props.active ? props.theme.activeMenu : "transparent"};
    width: 100%;
    padding: 0.3rem;
    padding-left: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    transition: 0.2s all ease-in-out;

    &:hover {
        background-color: rgba(0,0,0,0.1);
    }
`


const Span = styled.span`
    color: ${props => props.active ? props.activeMenu : "#B5B5B9"}; 
    color: "#AAA5A5";
    font-size: 1rem;
    margin-right: 1rem;
`

const Title = styled.h1`
    font-size: 0.9rem;
    font-weight: 300;
    color: #66C500;
    color: ${props => props.active ? props.theme.activeMenu : "#B5B5B9"};
`

const MenuLink = ({ title, active, icon }) => {

    return (
        <Container active={active}>
            <Span active={active} className="iconify" data-inline="false" data-icon={`mdi-light:${icon}`}></Span>
            <Title active={active}>{title}</Title>
        </Container>
    )
}

export default MenuLink
