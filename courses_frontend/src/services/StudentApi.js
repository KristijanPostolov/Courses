import axios from 'axios';

async function registerStudent(student) {
    return axios.post(`api/students`, student)
        .then(res => {
            console.log(res);
            return res
        })
        .catch(err => console.log(err))
}

async function loginStudent(username, password) {
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);

    return axios.post(`api/students/login`, data)
}

async function logout() {
    return axios.get('/api/students/logout')
}



export {registerStudent, loginStudent, logout}