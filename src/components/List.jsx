import React from 'react'
import { FixedSizeList } from 'react-window'
import styled from 'styled-components'

export const List = styled(FixedSizeList)`
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: rgba(63, 0, 49, 0.5);
        border-bottom-right-radius: 5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

`