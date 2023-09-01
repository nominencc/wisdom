import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

const  dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

export const loadObj = (url) => {
    return new Promise((resolve, reject) => {
        gltfLoader.load(url, gltf => {
            resolve(gltf)
        },
            () => {},
                err => {
            reject(err)
        })
    })
}
