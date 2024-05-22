import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-lallenation-0a85182b44cd.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true