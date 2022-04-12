import React, { useState, useEffect } from 'react';
import Articles from './components/Articles/Articles';
import Filter from './components/Filter/Filter';
import ArticleDetails from './components/ArticleDetails/ArticleDetails';
import './App.scss';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [selection, setSelection] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [foundArticle, setFoundArticle] = useState({})
  const sections = ['all articles', 'arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'];

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=BsMhAbdp1Yr9AvsW1w7Iu8RUHTavOe32')
      .then(response => response.json())
      .then(data => {
        setArticles([...data.results]);
        setIsLoading(false);
      })
  }, [])

  const filterArticles = section => {
    const filteredArticles = articles.filter(article => article.section === section)
    setFilteredArticles([...filteredArticles]);
  }

  const findArticle = url => {
    const foundArticle = articles.find(article => article.short_url === url);
    setFoundArticle(foundArticle);
    setIsModalOpen(true);
  }
  const componentForRender = isLoading ? <p>Loading...</p> : <Articles articles={articles} filteredArticles={filteredArticles} isFiltered={isFiltered} selection={selection} findArticle={findArticle}/>
  return (
    <div className="App">
      <h1 className="header">Turing Times</h1>
      <Filter sections={sections} filterArticles={filterArticles} setIsFiltered={setIsFiltered} setSelection={setSelection}/>
      {componentForRender}
      {isModalOpen && <ArticleDetails foundArticle={foundArticle} setIsModalOpen={setIsModalOpen}/>}
    </div>
  );
}

export default App;
