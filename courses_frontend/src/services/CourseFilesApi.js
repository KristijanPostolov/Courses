import axios from 'axios'

async function attachFile(data) {
    return axios.post(`/api/courseFiles`, data)
}

export {attachFile}