import axios from 'axios'

export const login = () => axios.get('/api/json/app.json')