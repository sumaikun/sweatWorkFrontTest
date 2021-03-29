import axios from 'axios'

import {
  SET_FETCHING
} from "../redux/constants";

import Swal from 'sweetalert2' 

const BASE_URL = "http://localhost:3000/"

console.log("BASE URL",BASE_URL,process.env);

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: false,
  params: {} // do not remove this, its added to add params later in the config
})

// Add a request interceptor
instance.interceptors.request.use(function (config) {

  Window.Store.dispatch({type:SET_FETCHING,payload:true})
  
  //const { token } = Window.Store.getState().auth

  if (Window.Store.getState().auth?.token) {
    const { token } = Window.Store.getState().auth
    config.headers.common['Authorization'] = 'Bearer ' + token
    config.headers.common['Access-Control-Allow-Origin'] = '*'
  } else {
    config.headers.common['Content-Type'] = 'application/json'
  }
  return config
}, function (error) {  
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
   
     Window.Store.dispatch({type:SET_FETCHING,payload:false})

     return response;
  }, (error) => {

    //console.log("error",error,error.message)

    Window.Store.dispatch({type:SET_FETCHING,payload:false})

    Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Server Error",          
    })    

    return Promise.reject(error)
})

export default {
  getData (action) {
    let url = `${BASE_URL}`
    url += action
    /* eslint-disable-next-line */
    //console.log("app url",url);
    return instance.get(url)
  },
  postData (action, data) {
    let url = `${BASE_URL}`
    url += action
    return instance.post(url, data)
  },
  putData (action, data) {
    let url = `${BASE_URL}`
    url += action
    return instance.put(url, data)
  },
  deleteData (action) {
    let url = `${BASE_URL}`
    url += action
    return instance.delete(url)
  },
  login (action, data) {
    let url = `${BASE_URL}`
    url += action
    return instance.post(url, data)
  }
}
