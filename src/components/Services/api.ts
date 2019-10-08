import axios from 'axios';

const api = axios.create({baseURL: 'https://storage.googleapis.com/desafio-ebook-store.appspot.com/JSON/livrosData.json'})

export default api