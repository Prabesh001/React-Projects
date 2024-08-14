import { useState } from "react";
import "./styles.css";

function Dictionary() {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function getWord(event) {
    setWord(event.target.value);
  }

  async function fetchMeaning() {
    if (!word.trim()) {
      setError('Please enter a word');
      return;
    }

    setLoading(true);
    setError('');
    setMeaning('');

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();

      if (response.ok && data.length > 0) {
        const definitions = data[0].meanings.map(meaning => meaning.definitions.map(def => def.definition)).flat();
        setMeaning(definitions.join(', '));
      } else {
        setError('No meaning found for the entered word.');
      }
    } catch (e) {
      setError('An error occurred while fetching the meaning.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="dictionary-container">
      <input 
        className="word-input" 
        value={word} 
        onChange={getWord} 
        placeholder="Enter a word" 
      />
      <button 
        className="search-button" 
        onClick={fetchMeaning} 
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <p className="error-message">{error}</p>}
      {meaning && <p className="meaning">Meaning: {meaning}</p>}
    </div>
  );
}

export default Dictionary;
