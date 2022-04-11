import React from 'react';
import Card from '../Card/Card';
import './Articles.scss';

const Articles = props => {
  const allArticles = props.articles.map(article => {
    return (
      <Card
        key={article.id}
        id={article.id}
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