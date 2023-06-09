import MovieCard from "../components/MovieCards";
import MobileNav from "../components/NavBar/MobileNav";
import {useEffect, useState} from 'react';
import {apiKey} from '../Globals/globalVariables';
import axios from 'axios';
import {useSelector} from "react-redux";
import isFavourite from "../utilities/isFavourite";
import {Link} from "react-router-dom";

function PageLanding() {
    const [movieData, setMovieData] = useState();
    const [dropDownDisplay, setDropDown] = useState();

    const favourites = useSelector((state) => state.rootReduce.favouritesReducer.items);
    //axios.get 
    async function getMovieData(type) {
        try {
            let resp = await axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=en-US&page=1`);
            await setMovieData(resp.data.results.slice(0, 18));
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovieData('popular').then(r => r);
    }, []);

    function handleDropDown(event) {
        setDropDown(event.target.value);
        getMovieData(event.target.value).then(r => r);
    }

    return (
        <>
        <div className="landing-wrapper">
            <nav className="drop-down">
             
                <div className="sort-by">
                    <p>Sort by</p>
                    <span className = "blue-box"></span>
                </div>
                <select onChange={handleDropDown} value={dropDownDisplay} name="drop-down">
                    <option value="popular">Popular</option>
                    <option value="now_playing">Now Playing</option>
                    <option value="top_rated">Top Rated</option>
                    <option value="upcoming">Upcoming</option>
                </select>
            </nav>
            
            {/* Displays function getMovieData */}
            <div className="movie-grid-container"> 
                {movieData?.map((movie, i) => {
                    return (
                        <div key = {i}>
                            <MovieCard
                                key={i}
                                movieObject={movie}
                                isFavourite={isFavourite(favourites, null, movie.id)}
                            />
                        </div>
                    );
                })}

            </div>
        </div> 
        </>
    )
}

export default PageLanding;