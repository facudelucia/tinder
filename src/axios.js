import axios from "axios"

const instance = axios.create({
    baseURL:"https://tinder-backend-facu.herokuapp.com"
})

export default instance