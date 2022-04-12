import React from 'react';
import './ArticleDetails.scss';

const ArticleDetails = props => {
  const [year, month, day] = props.foundArticle.published_date.split('T')[0].split('-');
  const formattedDate = [month, day, year].join('/');

  return (
    <section className="modal-background">
      <section className="details-modal">
        <img src={props.foundArticle.multimedia[1].url} alt="Modal Picture"/>
        <section className="modal-details-container">
          <section className="modal-header-container">
            <h2 className="modal-title">{props.foundArticle.title}</h2>
            <p className="modal-date">{formattedDate}</p>
            <p className="modal-byline">{props.foundArticle.byline}</p>
          </section>
          <section className="modal-abstract-container">
            <p className="modal-abstract">{props.foundArticle.abstract}</p>
          </section>
          <section className="modal-link-container">
            <p className="modal-short-url-header">Follow this link to read more about this article:</p>
            <a target="_blank" href={props.foundArticle.short_url} className="modal-short-url">{props.foundArticle.short_url}</a>
          </section>
          <button className="close-modal-button" onClick={() => props.setIsModalOpen(false)}>Close</button>
        </section>
      </section>
    </section>
  )
}

export default ArticleDetails;