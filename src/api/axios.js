import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:"c2abccbf35a02efbcbdf39471a052866",
        language:"ko-KR",
    },
});

export default instance;