import React, {createContext, useEffect, useState} from 'react'
import library from './library.json'

const { remote } = window.require('electron')
const { homedir } = remote.require('os')
const fs = remote.require('fs')
const path = remote.require('path')

const FilesContext = createContext()
const DIR = '/mnt/Datos/musica'
import {getFiles} from '../modules/filesysyem'

const Provider = ({children}) => {
    const [files, setFiles] = useState([])
    const [loading, setLoading] = useState(true)

    const set = async(dir='/mnt/1')=>{
        dir=='' ? setFiles(library):setFiles(getFiles(dir))
        setLoading(false)
    }

    useEffect(() => {
        set()
    }, [])

    return(
        <FilesContext.Provider value={{loading, files}}>
            {children}
        </FilesContext.Provider>
    )
    
}

export default {
    Provider,
    Consumer: FilesContext.Consumer
}