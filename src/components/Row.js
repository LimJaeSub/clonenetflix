import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"
import MovieModal from './MovieModal';

export default function Row({title,isLargeRow,id,fetchUrl}) {
    const [movies,setMovies]=useState([]);
    const [modalOpen,setModalOpen] = useState(false);
    const [movieSelected,setMovieSelected] = useState({});


    useEffect(()=>{
        fetchMovieData();
    });

    const fetchMovieData=async()=>{
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results);
    }

    const handleClick=(movie)=>{
        setModalOpen(true);
        setMovieSelected(movie);
    }

    
  return (
    <section className="row">
        <h2 className="movietitle">{title}</h2>
        <div className='slider'>
            <div className='slider__arrow-left' onClick={()=>{
                    document.getElementById(id).scrollLeft-=window.innerWidth;
                }}>
                <span className='arrow'>
                    {"<"}
                </span>
            </div>
            <div id={id} className="row__posters">
                {movies.map(movie=>(
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`https://image.tmdb.org/t/p/original/${isLargeRow?movie.poster_path:movie.backdrop_path}`}
                        //isLargeRow면 poster_path로 아니면 backdro__ppath로
                        alt={movie.name}
                        onClick={()=>handleClick(movie)}
                    />
                ))}
            </div>
            <div className="slider__arrow-right" onClick={()=>{
                    document.getElementById(id).scrollLeft+=window.innerWidth;
                }}>
                <span className="arrow">
                    {">"}
                </span>
            </div>
        </div>

                {
                    modalOpen&&( //modalopen이 true일경우 moviemodal components생성
                        <MovieModal
                            {...movieSelected}//선택된 movie의 정보 전달(MovieModal에)
                            setModalOpen={setModalOpen}
                        />
                    )
                }
    </section>
  )
}
