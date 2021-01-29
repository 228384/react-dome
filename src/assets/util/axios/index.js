import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 响应拦截
axios.interceptors.response.use(
  response => {
    response = response.data
    return response;
  },
  error => {
    return Promise.reject(error);
  });


// // 请求拦截
// axios.interceptors.request.use(
//   config => {
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   });
