import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./movieCard";

type Movie = {
  release_date: string;
  running_time: string;
  language: string;
  movie_name: string;
  thumbnail_url: string;
  imdb_rating: string;
  tags: string;
};

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [theatre, setTheatre] = useState([]);

  useEffect(() => {
    const fetchMovieTheatres = async () => {
      const response = await axios.post(
        "https://zincubate.in/api/MovieTicketChecker?action=getAllDetails",
        {
          user_mail_id: "sri@gmail.com",
        }
      );
      console.log(response)
      setMovies(response.data.movies);
      setTheatre(response.data.theatre);
    };
    fetchMovieTheatres();
  }, []);

  return (
    <React.Fragment>
      <div className="card-container">
        {movies !== undefined &&
          movies.length > 0 &&
          movies.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.movie_name}
              description={`${movie.language} | ${movie.imdb_rating} IMDB`}
              imageUrl={movie.thumbnail_url}
              tags={movie.tags}
              releaseDate={movie.release_date}
              runningTime={movie.running_time}
              theatres={theatre}
            />
          ))}
      </div>
    </React.Fragment>
  );
};

export default MovieList;
