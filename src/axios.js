import axios from "axios"

const instance = axios.create({
    baseURL:"https://fantasy-solstice-touch.glitch.me/"
})

export default instance