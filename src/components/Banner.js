import axios from '../api/axios';
import requests from '../api/requests';
import React, { useState,useEffect } from 'react'

export default function () {
    const[movie,setMovie] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        //현재 상영중인 영화정보를 가져오기
        const request = axios.get(requests.fetchNowPlaying);
        console.log(request);
    }
  return (
    <div></div>
  )
}
