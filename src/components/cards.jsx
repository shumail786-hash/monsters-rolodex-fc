import React from "react";
import "./style.css";
const Cards = (props) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { id, name, email } = monster;
        return (
          <div key={id} className="card-container">
            <img src={`https://robohash.org/${id}?set=set2`} alt={name} />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
