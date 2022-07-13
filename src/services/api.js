import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocktmovie.herokuapp.com"
})