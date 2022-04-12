import React from 'react';
import Card from '../Card/Card';
import './Articles.scss';

const Articles = props => {
  const cleanedArticles = props.articles.filter(article => article.multimedia !== null)
  // const allArticles = cleanedArticles.map((article, index) => {
  //   return (
  //     <Card
  //       key={index}
  //       id={index}
  //       multimedia={article.multimedia}
  //       title={article.title}
  //       published_date={article.published_date}
  //       byline={article.byline}
  //     />
  //   )
  // })
  // const filteredArticles = props.filteredArticles.map((article, index) => {
  //   return (
  //     <Card
  //       key={index}
  //       id={index}
  //       multimedia={article.multimedia}
  //       title={article.title}
  //       published_date={article.published_date}
  //       byline={article.byline}
  //     />
  //   )
  //})

  const checkArticles = () => {
    if (props.isFiltered) {
      return (
        props.filteredArticles.map((article, index) => {
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
      )
    } else {
      return (
        cleanedArticles.map((article, index) => {
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
      )
    }
  }

  
  return (
    <section className="articles-container">
      {checkArticles()}
    </section>
  )
}

export default Articles;