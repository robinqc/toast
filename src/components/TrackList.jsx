import React from 'react';
import AutoSizer from "react-virtualized-auto-sizer"
import {List} from './List.jsx'
import styled from 'styled-components'

const StyledRow = styled.div`
    height: 40px;
    line-height: 40px!important;
    border-radius: 5px;
    color:white;
    font-family: 'Roboto';
`
const StyledDiv = styled.div`
    margin: 0 !important;
    padding: 0 !important;
`
const HeaderStyle = styled.div`
    width: ${props => `${props.width-10}px`};
    height: 40px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    align-content: stretch;
    flex-wrap: nowrap;
    font-family: 'Roboto';
    color: white;
    line-height: 40px;
    background-color: rgba(225, 0, 80, 0.5);
    border-right: 10px solid rgba(225, 0, 80, 0);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const HeaderItem = styled.div`
    flex: 1 1 0;
    text-align:center;
`

const Background = styled.div`
    ${props => `
        background-color: rgba(63, 0, 49, 0.5); 
        height: ${props.height-75}px;
        width:  ${props.width}px;
        border-radius: 5px;
    `}
`

const Header = ({width}) => {
    return(
        <HeaderStyle width={width}>
            <HeaderItem style={{flexGrow: '2'}}>Titulo</HeaderItem>
            <HeaderItem>Álbum</HeaderItem>
            <HeaderItem>Artista</HeaderItem>
        </HeaderStyle>
    )
}

export const TrackList = ({loading, files})=>{
    console.log(files)
    const Row = ({index = 'sis', style = {}}) =>{
        return(
          <StyledDiv className="listitem" style={style}>
            <StyledRow >
            {files[index].title}
            </StyledRow>
          </StyledDiv>
          )
    }

    return(
        loading ?
        <p>loading</p>:
        
        <AutoSizer>
            
            {({ height, width }) => 
                <Background width={width} height={height}>
                    {Header({width: width})}
                    <List
                    
                    className="List"
                    height={height-120}
                    itemCount={files.length}
                    itemSize={40}
                    width={width}
                    
                    >
                    {Row}
                    </List>
                </Background>            
            }
        </AutoSizer>
    )


}

