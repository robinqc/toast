import React from 'react';
import AutoSizer from "react-virtualized-auto-sizer"
import {FixedSizeList} from 'react-window'
import styled from 'styled-components'

export const TrackList = ({loading, files})=>{
    console.log(files)
    const Row = ({index, style}) =>{
        return(
          <div className="listitem" style={style}>
            {files[index].file}
          </div>
          )
    }

    return(
        loading ?
        <p>loading</p>:
        <AutoSizer>
            {({ height, width }) => 
            
                <List
                className="List"
                height={height-65}
                itemCount={files.length}
                itemSize={60}
                width={width}
                >
                {Row}
                </List>
            }
        </AutoSizer>
    )


}

const List = styled(FixedSizeList)`
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: rgba(63, 0, 49, 0.5);
        border-radius: 5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

`