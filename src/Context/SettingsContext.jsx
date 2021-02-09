import React, {createContext, useEffect, useState} from 'react'
import library from './library.json'

const DEFAULT_SETTINGS = {
    library:{
        folders: ['/mnt/Datos/musica']
    },
    ui:{
        color_theme: 'dark-theme'
    }
}