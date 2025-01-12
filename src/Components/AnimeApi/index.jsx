import React, { useState, useEffect } from "react";
import Loading from "../Loading/loading.jsx";
import "./styles.css";

function AnimeApi() {
  const [nameValue, setNameValue] = useState(
    localStorage.getItem("nameValue") || ""
  );
  const [languageSelect, setLanguageSelect] = useState(
    Number(localStorage.getItem("languageSelect")) || 1
  );
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(Number(localStorage.getItem("page")) || 1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (nameValue) fetchData();
  }, [page]);

  useEffect(() => {
    localStorage.setItem("nameValue", nameValue);
    localStorage.setItem("languageSelect", languageSelect);
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("page", page);
  }, [nameValue, languageSelect, movies, page]);

  function select() {
    setLanguageSelect((prev) => (prev + 1) % 2);
  }

  async function fetchData() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${nameValue.toLowerCase()}&sfw&page=${page}`
      );
      if (!response.ok) {
        throw new Error("Could not fetch resource");
      }

      const data = await response.json();
      setMovies((prev) => [...prev, ...data.data]);

      if (data.pagination.last_visible_page === page) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (e) {
      setError("Error occurred: " + e.message + ". Probably Internet is gone!");
    } finally {
      setLoading(false);
    }
  }

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleSearch = () => {
    setMovies([]);
    setPage(1);
    fetchData();
  };
  
  if (loading) {
    return <Loading />
  }

  return (
    <div className="app">
      <h2>Search Anime Name</h2>
      <form action="submit">
        <input
          type="search"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          placeholder="Anime name"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          style={{ marginRight: "10px" }}
        >
          Search{" "}
        </button>
      </form>
      <br />
      <label htmlFor="languageSelect"> Name in:</label>
      <select
        name="Language"
        id="languageSelect"
        value={languageSelect}
        onChange={select}
      >
        <option value={1}>Japanese</option>
        <option value={0}>English</option>
      </select>
      <br />
      <br />
      <div id="movies" className="movies-container">
        {error && <p>{error}</p>}
        {movies.length === 0 && !error && <p>No result found!</p>}
        {movies.map((detail, index) => {
          const viewedTitle =
            languageSelect === 0
              ? detail.title_english
              : detail.title || detail.title;
          return (
            <div key={index} className="each-movie">
              <img
                src={detail.images.jpg.image_url}
                title={viewedTitle}
                className="cover"
                alt={viewedTitle}
                draggable="false"
              />
              <span className="anime-name">{viewedTitle}</span>
              <div id="status">{detail.status}</div>
              <select id={`number-${index + 1}`}>
                <option value="" disabled selected>
                  Not Watched
                </option>
                <option value="1">Watching</option>
                <option value="2">Completed</option>
                <option value="3">Dropped</option>
              </select>
            </div>
          );
        })}
      </div>
      {hasMore && !loading && (
        <button onClick={loadMore} className="load-more">
          Load More
        </button>
      )}
    </div>
  );
}

export default AnimeApi;
