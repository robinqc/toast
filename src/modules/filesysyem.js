const { remote } = window.require('electron')
const { homedir } = remote.require('os')
const fs = remote.require('fs')
const path = remote.require('path')
const mm = require('music-metadata')

const DEFAULT_METADATA = {
    album: 'Unknown',
    artist: ['Unknown artist'],
    disk: {
        no: 0,
        of: 0,
    },
    duration: 0,
    genre: [],
    loweredMetas: {
        artist: ['unknown artist'],
        album: 'unknown',
        title: '',
        genre: [],
    },
    path: '',
    playCount: 0,
    title: '',
    track: {
        no: 0,
        of: 0,
    },
    year: null,
}

export const getFiles = async(dir=DIR) => {
    try {
        const dirents = await fs.promises.readdir(dir, { withFileTypes: true })
        const files = await Promise.all(dirents.map(async(dirent) => {
            const res = path.resolve(dir, dirent.name)
            if (dirent.isDirectory()) {
                return getFiles(res)
            }
            else{
                let fileMetadata = await getFileMetadata(res)
                return fileMetadata
            }
        }))
        return Array.prototype.concat(...files)
    }
    catch(error) {
        Array.prototype.concat([])
    }
}

export const getFileMetadata = async(path) => {
    try{
        const { format, common } = await mm.parseFile(path)
        return {
            album: common.album ?? DEFAULT_METADATA.album,
            artist: common.artists ?? DEFAULT_METADATA.artist,
            disk: {
                no: common.disk.no ?? DEFAULT_METADATA.disk.no,
                of: common.disk.of ?? DEFAULT_METADATA.disk.of,
            },
            track: {
                no: common.track.no ?? DEFAULT_METADATA.track.no,
                of: common.track.of ?? DEFAULT_METADATA.track.no,
            },
            duration: format.duration ?? DEFAULT_METADATA.duration,
            genre: common.genre ?? DEFAULT_METADATA.genre,
            loweredMetas: {
                artist: common.artists ?? DEFAULT_METADATA.artist,
                album: common.album ?? DEFAULT_METADATA.album,
                title: common.title ?? DEFAULT_METADATA.title,
                genre: [],
            },
            path: path,
            playCount: 0,
            title: common.title ?? DEFAULT_METADATA.title,
            year: common.year ?? DEFAULT_METADATA.year,
        }
    }catch(error){
        return null
    }
}