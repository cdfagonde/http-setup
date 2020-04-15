import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Algumas definições globais de axios
import axios from 'axios';

// Alguns valores default para o axios

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
// Precisei substituir a linha anterior para evitar bloqueio CORS. Acabei tirando depois de achar um plugin chrome que faz isso.
// axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/';
//
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function print_time() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time);
}

axios.interceptors.request.use( req => {
    // console.log(req);
    print_time();
    // Aqui podemos alterar o request
    return req;
}, err => {
    // console.log("Erro interceptado no request!");
    // console.log(err);
    return Promise.reject(err);
});

axios.interceptors.response.use( res => {
    // console.log(res);
    print_time();
    // Aqui podemos alterar response??
    return res;
}, err => {
    // console.log("Erro interceptado no response!");
    // console.log(err);
    return Promise.reject(err);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
