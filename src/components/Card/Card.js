import React from 'react';
import './Card.scss';

const Card = props => {
  const [year, month, day] = props.published_date.split('T')[0].split('-');
  const formattedDate = [month, day, year].join('/');

  return (
    <section className="article-card" key={props.id}>
      <section className="image-title-container">
        <img src={props.multimedia[2].url} alt="Article Thumbnail" className="article-thumbnail"/>
        <h2 className="article-title">{props.title}</h2>
      </section>
      <section className="card-details-container">
        <p>{formattedDate}</p>
        <p>{props.byline}</p>
      </section>
    </section>
  )
}

export default Card;