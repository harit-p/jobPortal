import axios from 'axios';
const base_url = 'http://localhost:8080/users/';

const registerUser=async(user:any)=>{
    return axios.post(`${base_url}register`,user)
    .then(response=>response.data)
    .catch(error=>{throw error;});
}

const loginUser=async(login:any)=>{
    return axios.post(`${base_url}login`,login)
    .then(response=>response.data)
    .catch(error=>{throw error;});
}

export {registerUser,loginUser};