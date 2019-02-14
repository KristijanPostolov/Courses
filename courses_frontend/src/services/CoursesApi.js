import axios from 'axios';

async function getAllCourses(query) {
    return axios.get(`/api/courses?query=${query}`)
        .then(response =>{return response.data})
        .catch(error => console.log(error))
}

async function getCoursesByName(name) {
    return axios.get(`/api/courses/${name}`,name)
        .then(response => {return response.data})
        .catch(err => console.log(err))
}

async function createCourse(course) {
    return axios.post(`/api/courses`, course)
        .then(res => {return res.data})
        .catch(err => console.log(err))

}
export {getAllCourses, getCoursesByName, createCourse }