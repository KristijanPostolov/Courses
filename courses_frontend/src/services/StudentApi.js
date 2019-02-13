import axios from 'axios';

async function registerStudent(student) {
    return axios.post(`api/students`,student)
        .then(res => {console.log(res); return res})
        .catch(err => console.log(err))
}

export {registerStudent}