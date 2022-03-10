import React,{useEffect, useState} from 'react'
import './Nav.css';
export default function Nav() {
    const [show,setShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            console.log(window.scrollY);
            if(window.scrollY>50){
                setShow(true);
            }
            else{
                setShow(false);
            }
        })
        
        return()=>{
            window.removeEventListener("scroll",()=>{})
        };
    },[]);
  return (
    <nav className='nav'>
        <img
            alt='Netflix logo'
            src='https://w7.pngwing.com/pngs/299/104/png-transparent-netflix-logo-logos-brands-in-colors-icon-thumbnail.png'
            className='nav__logo'
            onClick={()=>window.location.reload()}
        />
        <img
            alt="User logged"
            src="https://w.namu.la/s/e917e9e53f871484910eba4b0e6fa90d9cc67413901fb85cc534f67e60b27289e03a3e499cbb0f0db6734d866bda9313aac5cf362721fecaa88a24e5c5216536bb602f9f932ee13aed48d96f92fa8048038ff39c434a02ffd86d177873b9d48958a80dbaa3bc55ec89f03311f8406d3e"
            className='nav__avatar'
        />
    </nav>
  )
}

