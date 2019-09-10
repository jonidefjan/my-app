import axios from "axios";

export default axios.create({
  baseURL: "https://storage.googleapis.com/desafio-ebook-store.appspot.com/JSON/livrosData.json",
  responseType: "json"
});