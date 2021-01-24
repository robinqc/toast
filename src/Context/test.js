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

const fil = async() =>{
    const files = await getFiles('/mnt/Datos/musica')
    for(let index=0; index < 1; index++){
        const metadata = await mm.parseFile(files[index])
        const extension = files[index].split('.').pop()
        console.log(extension)
        console.log(metadata)
        const track = {

        }
    }
}

fil()