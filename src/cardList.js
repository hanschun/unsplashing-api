import React from 'react';

export const CardList = ({pictures}) => {

  return (
    <div className="card-list">
      {
        pictures.map((pic) => 
          <div
            className="card"
            key={pic.id}
            >
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
              />
          </div>
        )
      }
    </div>
  )
}
