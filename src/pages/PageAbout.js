import React from 'react'
import {Link} from "react-router-dom";

function PageAbout() {
  return (
    <div className='about-page'>
      <div className="title">
        <span className = "blue-box"></span>         
        <h1>About</h1>
      </div>

      <div className="content">
        <p>This product uses the TMDb API but is not endorsed or certified by TMDb</p>
        <img className="credits-icon" src={require('../images/tmdb-logo.png')} alt="tmdb-logo"></img>
      </div>
    </div>
  )
}

export default PageAbout