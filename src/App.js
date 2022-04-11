import React, { useState, useEffect } from 'react';
import Articles from './components/Articles/Articles';
import './App.scss';

// api-key: BsMhAbdp1Yr9AvsW1w7Iu8RUHTavOe32

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=BsMhAbdp1Yr9AvsW1w7Iu8RUHTavOe32')
      .then(response => response.json())
      .then(data => setArticles([...data.results]))
  }, [])
  
  return (
    <div className="App">
      <h1 className="header">Turing Times</h1>
      <Articles articles={articles}/>
    </div>
  );
}

export default App;
