import axios from "axios";
// import { LOCAL_STORE_AUTHORIZATION } from '../Utils/Constants/LocalStorage';
 
const urlBase = 'https://dev.azzinformatica.com/api/v1';
 
const readUrl = (url = '') =>
  url.startsWith('http://') || url.startsWith('https://') ? url : `${urlBase}/${url}`

const get = (url = '', params = {}, headers = {}) => axios.get(readUrl(url), {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json', 
     
    ...headers
  },
  params: {

    ...params
  },

})

// const getAuth = (url = '', params = {}, headers = {}) => axios.get(readUrl(url), {
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     'Authorization': localStorage.getItem(LOCAL_STORE_AUTHORIZATION) ,
//     ...headers
//   },
//   params: {

//     ...params
//   },

// })


// const postAuth = (url = '', body = {}, params = {}, headers = {}) => axios.post(readUrl(url), body, {
//   headers: {
//     Accept: 'application/json',
//     'Authorization': localStorage.getItem(LOCAL_STORE_AUTHORIZATION), 
//     'Content-Type': 'application/json',
//     ...headers
//   },
//   params: {
//     ...params
//   }


// })
  
// const postCulqui = (url = '', body = {}, params = {}, headers = {}) => axios.post(url, body, {
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     ...headers
//   },
//   params: {
//     ...params
//   }


// })

const post = (url = '', body = {}, params = {}, headers = {}) => axios.post(readUrl(url), body, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers
  },
  params: {
    ...params
  }


})
// const patch = (url = '', body = {}, params = {}, headers = {}) => axios.patch(readUrl(url), body, {
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     ...headers
//   },
//   params: {
//     ...params
//   }


// })
// const put = (url = '', body = {}, params = {}, headers = {}) => axios.put(readUrl(url), body, {
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
    
//     ...headers
//   },
//   params: {
//     ...params
//   }


// })



export default{
  get,
  // postAuth,
  post,
  // put,
  // getAuth ,
  // patch
}