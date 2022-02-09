import React from "react";
import HeroSlide from "../components/hero-slide/HeroSlide";
import { Link } from "react-router-dom";

import { OutlinedButton } from "../components/button/Button";
import MovieList from "../components/movie-list/MovieList";
import {category, movieType, tvType} from "../api/tmdbApi"
const Home = () => {
  return (
    <div>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutlinedButton className="small">View More</OutlinedButton>
            </Link>

          </div>
          <MovieList category={category.movie} type={movieType.popular}/>

        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlinedButton className="small">View More</OutlinedButton>
            </Link>

          </div>
          <MovieList category={category.movie} type={movieType.top_rated}/>

        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to="/tv">
              <OutlinedButton className="small">View More</OutlinedButton>
            </Link>

          </div>
          <MovieList category={category.tv} type={tvType.popular}/>

        </div>
        
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Link to="/tv">
              <OutlinedButton className="small">View More</OutlinedButton>
            </Link>

          </div>
          <MovieList category={category.tv} type={tvType.top_rated}/>

        </div>
      </div>
    </div>
  );
};

export default Home;
