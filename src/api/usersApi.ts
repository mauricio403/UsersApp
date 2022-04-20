import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const usersApi = axios.create({
    baseURL, headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

export default usersApi;