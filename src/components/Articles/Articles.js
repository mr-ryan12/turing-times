import React from 'react';
import Card from '../Card/Card';
import './Articles.scss';

const Articles = props => {
  const cleanedArticles = props.articles.filter(article => article.multimedia !== null)
  const allArticles = cleanedArticles.map((article, index) => {
    console.log( index, article.multimedia)
    return (
      <Card
        key={index}
        id={index}
        multimedia={article.multimedia}
        title={article.title}
        published_date={article.published_date}
        byline={article.byline}
      />
    )
  })

  return (
    <section className="articles-container">
      {allArticles}
    </section>
  )
}

export default Articles;