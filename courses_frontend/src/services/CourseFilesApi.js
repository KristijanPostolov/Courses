import axios from 'axios'

async function attachFile(data) {
    return axios.post(`/api/courseFiles`, data)
}

async function downloadFile(id){
    return axios.get(`/api/courseFiles/${id}`)
}
export {attachFile, downloadFile}