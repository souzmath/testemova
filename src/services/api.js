import axios from "axios";

export const api = axios.create({ 
    baseURL: "http://api.countrylayer.com/v2/"
})