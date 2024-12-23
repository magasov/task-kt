import React from 'react';

const Work = ({ work }) => {
  return (
    <div className="work__main">
      <img src={work.image} alt={work.title} />
      <div className="work__left">
        <h2>{work.title}</h2>
        <p className="year">{work.year}</p>
        <p>{work.description}</p>
      </div>
    </div>
  );
};

export default Work;