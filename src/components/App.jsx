
import React from 'react';
import { TitleBar } from 'electron-react-titlebar'
import 'electron-react-titlebar/assets/style.css'
import styled from 'styled-components'
import { MainMenu } from './MainMenu.jsx'
import { Router, createMemorySource,createHistory, LocationProvider } from '@reach/router'
import FilesContext from '../Context/FilesContext.jsx'
import Grid from '@material-ui/core/Grid'
import { Search } from './Search.jsx'
import {TrackList} from './TrackList.jsx'

const source = createMemorySource("/")
let history = createHistory(source)

const App = (props) => {
  
  return(
    <LocationProvider history={history}>
    <Wrapper>
      <TitleBar /*menu={menuTemplate} icon={iconPath} */ >
        <Title>Toast</Title>
      </TitleBar>
      
          <Grid container spacing={0} style={{flex: '1 1 auto'}}>
            <Grid item sm xs={12} md lg >
              <MainMenu/>
            </Grid>
          <Grid item xs={12} sm={7} md={7} lg={7} xl={9} style={{padding:'0 5px'}}>
            <Search/>
            <FilesContext.Consumer>

            {value=>
              <TrackList {...value}/>
            }
          
            </FilesContext.Consumer>
          </Grid>
          <Grid item sm xs={12} lg md >
            ss
          </Grid>
          </Grid>
          
        

    </Wrapper>
    </LocationProvider>
  )
}

const Wrapper = styled.div`
  display: flex;
  max-height: 100vh;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
`

const Title = styled.span`
  line-height:40px;
  color:#E10050!important;
  padding-left: 20px;
  font-size: 16px;
  font-weight: bold;
  filter: drop-shadow(0px 2px 8px rgba(225, 1, 80, 0.76));
`


export default App;
