import React from 'react';
import './card.css';

const Card = ({ title, description }) => (
  <div className="card">
    <h2>{title}</h2>
    <hr />
    <p>{description}</p>
  </div>
);

export default Card;
