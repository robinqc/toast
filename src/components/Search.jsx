import React, { useState } from 'react'
import {makeStyles, fade, Icon, InputBase } from '@material-ui/core'
import {Search as SearchIcon} from '@material-ui/icons'
import styled from 'styled-components'
const useStyles = makeStyles({
    search: {
        position: 'relative',
        backgroundColor: '#1A2230',
        '&:hover': {
          backgroundColor: fade("#1A2230", 0.75),
        },
        width: '98.7%',
        margin: "5px 5px",
        height: '40px',
        display:'flex',
        borderRadius:'4px'
      },
      searchIcon: {
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        color: 'white',
        paddingLeft: '20px',
        paddingRight: '20px',
        width:'20px'
      },
      inputRoot: {
        fontWeight: 'bold',
        width: '90%',
        paddingTop: '0.5%',
        color: 'white'
      },
      inputInput: {
        padding: "10px",
        // vertical padding + font size from searchIcon
        width: '100%',
      },
})

export const Search = (props) => {
    const classes = useStyles()
    return(
        <SearchDiv>
                <IconWrapper>
                    <SearchIcon/>
                </IconWrapper>
                <InputBase
                placeholder='search'
                
                inputProps={{ 'aria-label': 'search' }}
                />
        </SearchDiv>
    )
}

const SearchDiv = styled.div`
    position: relative;
    background-color:rgba(225, 0, 80, 0.5);
    &:hover{
        background-color: rgba(149, 0, 52, 0.5);
    }
    width: 100%;
    height: 45px;
    display:flex;
    border-radius:4px;
    margin-top:10px;
    margin-bottom:10px;
    & .MuiInputBase-root{
        font-weight: bold;
        width: 90%;
        color:white;
    }
    & .MuiInputBase-input{
        padding: 10px;
        width: 100%;
    }
`

const IconWrapper = styled.div`
    height: 100%;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    width:20px;
`

