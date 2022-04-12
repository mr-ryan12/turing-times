import React from 'react';
import Card from '../Card/Card';
import './Articles.scss';

const Articles = props => {
  const cleanedArticles = props.articles.filter(article => article.multimedia !== null);
  const cleanedFilteredArticles = props.filteredArticles.filter(article => article.multimedia !== null);

  const createArticleCards = articles => {
    if (articles) {
      return articles.map((article, index) => {
        return (
          <Card
            key={index}
            id={index}
            multimedia={article.multimedia}
            title={article.title}
            published_date={article.published_date}
            byline={article.byline}
            findArticle={props.findArticle}
            short_url={article.short_url}
          />
        )
      })
    }
  }

  const checkArticles = () => {
    if (props.isFiltered) {
      return createArticleCards(cleanedFilteredArticles)
    } else if (!props.isFiltered || props.selection === 'all articles') {
      return createArticleCards(cleanedArticles)
    }
  }

  const emptyContainerMessage = !checkArticles().length ? <p className="empty-container-message">Sorry, there are not any articles for that selection. Please make another selection.</p> : null
  return (
    <>
      {emptyContainerMessage}
      <section className="articles-container">
        {checkArticles()}
      </section>
    </>
  )
}

export default Articles;