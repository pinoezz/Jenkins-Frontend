import axios from 'axios';

const API = axios.create({
<<<<<<< HEAD
    baseURL: "https://api.app.alfino.studentdumbways.my.id/api/v1"
=======
<<<<<<< HEAD
    baseURL: "https://api.app.jenkins.alfino.studentdumbways.my.id/api/v1"
=======
    baseURL: "https://api.jenkins.alfino.studentdumbways.my.id/api/v1"
>>>>>>> f56477e346801f0f0600583edc24645a46fca561
>>>>>>> f89d2aacf4b75be592425e9c7079262f943bdf26
});

const setAuthToken = (token) => {
    if(token){
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete API.defaults.headers.common['Authorization'];
    }
}

export {
    API,
    setAuthToken
}
