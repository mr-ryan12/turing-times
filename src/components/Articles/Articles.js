import React from 'react';
import './Articles.scss';

const Articles = props => {
  const allArticles = props.articles.map(article => {
    return (
      <section className="article-card" key={article.id}>
        <h2>{article.title}</h2>
        <p>{article.section}</p>
        <p>{article.published_date}</p>
        <p>{article.byline}</p>
      </section>
    )
  })

  return (
    <section className="articles-container">
      {allArticles}
    </section>
  )
}

export default Articles;