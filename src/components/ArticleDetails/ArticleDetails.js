import React from 'react';
import './ArticleDetails.scss';

const ArticleDetails = props => {
  return (
    <section className="modal-background">
      <section className="details-modal">
        <img src="https://static01.nyt.com/images/2022/04/10/world/xxbucha3-promo/merlin_205302633_f60ec66d-8227-47e6-b703-b7b936ad93b0-threeByTwoSmallAt2X.jpg" alt="Modal Picture"/>
        <section className="modal-details-container">
          <section className="modal-header-container">
            <h2 className="modal-title">Bucha's Month of Terror</h2>
            <p className="modal-date">04/10/2022</p>
            <p className="modal-byline">By Daniel Berehulak and Carlotta Gall</p>
          </section>
          <section className="modal-abstract-container">
            <p className="modal-abstract">We documented dozens of killings of civilians and interviewed scores of witnesses to uncover Russian atrocities in Ukraine.</p>
          </section>
          <section className="modal-link-container">
            <p className="modal-short-url-header">Follow this link to read more about this article:</p>
            <a target="_blank" href="https://nyti.ms/37Dgk6b" className="modal-short-url">https://nyti.ms/37Dgk6b</a>
          </section>
          <button className="close-modal-button" onClick={() => props.setIsModalOpen(false)}>Close</button>
        </section>
      </section>
    </section>
  )
}

export default ArticleDetails;