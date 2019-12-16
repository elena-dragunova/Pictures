import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 23c4037b6a07ce5333ba411192ca7bad67033df5d510e359e21def7a499a6d12'
  }
});
