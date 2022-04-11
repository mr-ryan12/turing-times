import React from 'react';
import './Articles.scss';

const Articles = props => {
  const allArticles = props.articles.map(article => {
    return (
      <section className="article-card" key={article.id}>
        <section className="image-title-container">
          <img src={article.multimedia[2].url} alt="Article Thumbnail" className="article-thumbnail"/>
          <h2 className="article-title">{article.title}</h2>
        </section>
        <section className="card-details-container">
          <p>{article.published_date}</p>
          <p>{article.byline}</p>
        </section>
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