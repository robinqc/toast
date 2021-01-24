import React from 'react'
import {List, Button } from '@material-ui/core'

import styled, {css}from 'styled-components'
import { Link as RouterLink } from '@reach/router'
import { Dashboard, LibraryMusic, Book, RecentActors, QueueMusic, Settings } from '@material-ui/icons'


const Item = ({icon, title, to})=>{
  return(
    <Link to={to}><MenuItem startIcon={icon}>{title}</MenuItem></Link>
  )
}

const StyledList = styled(List)`
  padding-left: 10px;
`

export const MainMenu = () => {
    return (
        <StyledList>
            <Item to='/' icon={<Dashboard/>} title='Inicio'/>
            <Item to='/songs' icon={<LibraryMusic/>} title='Canciones'/>
            <Item to='/artists' icon={<RecentActors/>} title='Artistas'/>
            <Item to='/albums' icon={<Book/>} title='Albumes'/>
            <Item to='/playlists' icon={<QueueMusic/>} title='Listas de Reproducción'/>
            <Item to='/settings' icon={<Settings/>} title='Ajustes'/>
        </StyledList>
    )
}

const Link = styled(RouterLink)`
  text-decoration: none;
  &::focus{
    color:blue;
  }
`

const MenuItem = styled(Button)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    ${({theme})=>`color: #d63075;`}
    width: 95%;
    margin: 2px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5x;
    padding-left: 15px;
    height: 45px;
    line-height: 35px;
    text-transform: capitalize;
    padding-left: 15px;
    text-decoration: none;
    text-transform: capitalize;
    ${Link}[aria-current] &{
        color:white!important;
        background: linear-gradient(102.28deg, #E10050 0.84%, rgba(43, 54, 72, 0) 92.24%);
        filter: drop-shadow(0px 4px 8px rgba(255, 0, 89, 0.479));
        z-index: 2;
    }
    ${Link}[aria-current]:hover &{
        color:white!important;
        background: linear-gradient(102.28deg, #c23566 0.84%, rgba(43, 54, 72, 0) 92.24%)
    }
    ${Link}:hover &{
        background: linear-gradient(102.28deg, #461425, rgba(43, 54, 72, 0) 112.24%)
    }
    
`


