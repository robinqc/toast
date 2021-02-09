const library = require('./library.json')
const fs = require('fs')
const path = require('path')
const mm = require('music-metadata')
console.log(library)

const defaultMetadata = {
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

const getFiles = async (dir) =>{
    const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return Array.prototype.concat(...files);
}

const meta = async(defaultMeta, path) => {
    try{
        const {format, common} = await mm.parseFile(path)
        return {
            album: common.album ?? defaultMeta.album,
            artist: common.artists ?? defaultMeta.artist,
            disk: {
                no: common.disk.no ?? defaultMeta.disk.no,
                of: common.disk.of ?? defaultMeta.disk.of,
            },
            track: {
                no: common.track.no ?? defaultMeta.track.no,
                of: common.track.of ?? defaultMeta.track.no,
            },
            duration: format.duration ?? defaultMeta.duration,
            genre: common.genre ?? defaultMeta.genre,
            loweredMetas: {
                artist: common.artists ?? defaultMeta.artist,
                album: common.album ?? defaultMeta.album,
                title: common.title ?? defaultMeta.title,
                genre: [],
            },
            path: path,
            playCount: 0,
            title: common.title ?? defaultMeta.title,
            year: common.year ?? defaultMeta.year,
        }
    }catch(error){
        return null
    }
}

const fil = async() =>{
    const files = await getFiles('/mnt/Datos/musica')
    const tracks = []
    for(let index=0; index<100;index++){
        const metadata = await meta(defaultMetadata, files[index])
        console.log(metadata)
        tracks.push(metadata)
    }
    fs.writeFile('./library.json', JSON.stringify(tracks), 'utf8', console.log);
}

fil()