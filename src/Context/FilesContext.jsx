import React, {createContext, useEffect, useState} from 'react'
import library from './library.json'

const {remote} = window.require('electron')
const {homedir} = remote.require('os')
const fs = remote.require('fs')
const path = remote.require('path')

const FilesContext = createContext()
const DIR = '/mnt/Datos/musica'

const Provider = ({children}) => {
    const [files, setFiles] = useState([])
    const [loading, setLoading] = useState(true)

    const getFiles = async (dir) =>{
        const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
        const files = await Promise.all(dirents.map((dirent) => {
            const res = path.resolve(dir, dirent.name);
            return dirent.isDirectory() ? getFiles(res) : res;
        }));
        return Array.prototype.concat(...files);
    }

    const set = async(dir='')=>{
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