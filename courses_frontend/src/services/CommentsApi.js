import axios from 'axios'


async function createComment(comment) {
    axios.post(`/api/comments`, comment)
        .then(res=> res.data)
        .catch(err => console.log(err))

}

export {createComment}