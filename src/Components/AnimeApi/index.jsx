import React, { useState, useEffect } from "react";
import Loading from "../Loading/loading.jsx";
import "./styles.css";

function AnimeApi() {
  const [nameValue, setNameValue] = useState(localStorage.getItem("nameValue") || "");
  const [languageSelect, setLanguageSelect] = useState(Number(localStorage.getItem("languageSelect")) || 1);
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem("movies")) || []);
  const [watchStatus, setWatchStatus] = useState(JSON.parse(localStorage.getItem("watchStatus")) || {});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(Number(localStorage.getItem("page")) || 1);
  const [hasMore, setHasMore] = useState(true);

  
  useEffect(() => {
    localStorage.setItem("nameValue", nameValue);
    localStorage.setItem("languageSelect", languageSelect);
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("page", page);
    localStorage.setItem("watchStatus", JSON.stringify(watchStatus));
  }, [nameValue, languageSelect, movies, page, watchStatus]);

  
  const selectLanguage = () => setLanguageSelect((prev) => (prev === 1 ? 0 : 1));

  
  const fetchData = async () => {
    if (!nameValue) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${nameValue.toLowerCase()}&sfw&page=${page}`)

      if (!response.ok) throw new Error("Could not fetch data!");

      const data = await response.json();
      setMovies((prev) => (page === 1 ? data.data : [...prev, ...data.data]));

      setHasMore(page < data.pagination.last_visible_page);
    } catch (e) {
      setError(`Error: ${e.message}. Please check your internet connection.`);
    } finally {
      setLoading(false);
    }
  };

  
  const handleSearch = (e) => {
    e.preventDefault();
    if (!nameValue.trim()) return;

    setMovies([]);
    setPage(1);
    fetchData();
  };

  
  useEffect(() => {
    fetchData();
  }, [page]);
  
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };
  

  
  const updateWatchStatus = (id, value) => {
    setWatchStatus((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="app">
      <h2>Search Anime Name</h2>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          placeholder="Anime name"
        />
        <button type="submit" disabled={loading} style={{ marginRight: "10px" }}>
          Search
        </button>
      </form>

      <label htmlFor="languageSelect"> Name in: </label>
      <select id="languageSelect" value={languageSelect} onChange={selectLanguage}>
        <option value={1}>Japanese</option>
        <option value={0}>English</option>
      </select>

      {loading && <Loading />}

      <div className="movies-container">
        {error && <p className="error">{error}</p>}
        {!error && movies.length === 0 && <p>No results found!</p>}

        {movies.map((detail,i) => {
          const viewedTitle = languageSelect === 0 ? detail.title_english : detail.title || "No Title";
          return (
            <div key={i} className="each-movie">
              <img
                src={detail.images?.jpg?.image_url}
                alt={viewedTitle}
                className="cover"
                draggable="false"
              />
              <span className="anime-name">{viewedTitle}</span>
              <div className="status">{detail.status}</div>

              <select
                value={watchStatus[detail.mal_id] || "0"}
                onChange={(e) => updateWatchStatus(detail.mal_id, e.target.value)}
              >
                <option value="0" disabled>
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
