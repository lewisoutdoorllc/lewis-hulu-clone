import axios from "axios";

const instance = axios.create({
    // this sets the BASE URL for our requests
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;