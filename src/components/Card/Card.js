import React from 'react';
import './Card.scss';

const Card = props => {
  return (
    <section className="article-card" key={props.id}>
        <section className="image-title-container">
          <img src={props.multimedia[2].url} alt="Article Thumbnail" className="article-thumbnail"/>
          <h2 className="article-title">{props.title}</h2>
        </section>
        <section className="card-details-container">
          <p>{props.published_date}</p>
          <p>{props.byline}</p>
        </section>
      </section>
  )
}

export default Card;