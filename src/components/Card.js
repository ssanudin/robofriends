import React from 'react';

const Card = ( {name, email, id} ) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} width="150"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );

}

export default Card;