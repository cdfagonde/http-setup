import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Algumas definições globais de axios
import axios from 'axios';

// Alguns valores defaul para o axios
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use( req => {
    console.log(req);
    // Aqui podemos alterar o request
    return req;
}, err => {
    console.log("Erro interceptado no request!");
    console.log(err);
    return Promise.reject(err);
});

axios.interceptors.response.use( res => {
    console.log(res);
    // Aqui podemos alterar response??
    return res;
}, err => {
    console.log("Erro interceptado no response!");
    console.log(err);
    return Promise.reject(err);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
