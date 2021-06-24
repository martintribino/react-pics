import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID gruE_iEIo_JI7liHAi9CwsP9Q_-fpVjvxJ08zJ9Ndhw'
  }
});