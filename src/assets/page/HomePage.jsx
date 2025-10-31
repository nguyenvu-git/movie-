import Header from "../../components/Header";
import Banner from "../../components/Banner";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList";
import MovieSearch from "../../components/MovieSearch";
export default function HomePage() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);
  const handleSearch = async (searchValue) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=vi&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      console.log(data);
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=vi-US&page=1";

      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=vi-US&page=1";
      // const response = await fetch(url, options);
      // const data = await response.json();
      // console.log(data);
      // setMovie(data.results);

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);

      const data1 = await res1.json();
      const data2 = await res2.json();
      setMovie(data1.results);
      setMovieRate(data2.results);
    };

    fetchMovie();
  }, []);
  return (
    <>
      <Header onSearch={handleSearch}></Header>
      <div className="bg-black">
        <Banner></Banner>
        {movieSearch.length > 0 ? (
          <MovieSearch data={movieSearch} title={"Kết quả tìm kiếm:"}></MovieSearch>
        ) : (
          <>
            {" "}
            <MovieList title={"Phim Hot"} data={movie}></MovieList>
            <MovieList title={"Phim Đề Cử"} data={movieRate}></MovieList>
          </>
        )}
      </div>
    </>
  );
}
