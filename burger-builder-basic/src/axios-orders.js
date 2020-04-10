import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-sm.firebaseio.com/'
})

export default instance;