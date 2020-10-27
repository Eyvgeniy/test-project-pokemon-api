import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';

const Card = () => {
  const card = useLocation().state;
  return (
    <>
      {card ? (
        <div className="row my-2 d-flex flex-grow-1">
          <div className="col-md-6 ">
            <div className="d-flex flex-column align-items-center h-100">
              <img src={card.imageUrlHiRes} alt={card.name} className="w-75 px-auto" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-2">
              <p>
                <span>{`Name: `}</span>
                <strong>{card.name}</strong>
              </p>
              {card.types && <p>{`Type: ${card.types} `}</p>}
              <p>{`Subtype: ${card.subtype}`}</p>
              <hr />
              {card.attacks && <p>{`attackDamage: ${card.attacks[0].damage}`}</p>}
              {card.attacks && <p>{`attackCost: ${card.attacks[0].cost[0]}`}</p>}
              {card.resistances && <p>{`resistances: ${JSON.stringify(card.resistances[0])}`}</p>}
              {card.evolvesFrom && <p>{`evolvesFrom: ${card.evolvesFrom}`}</p>}
              {card.attacks &&
                card.attacks.map((a, i) => (
                  <div key={i}>
                    <p className="mb-1">{`Attack Name: ${a.name}`}</p>
                    {a.text && <small>{`Description: ${a.text}`}</small>}
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/cards" />
      )}
    </>
  );
};

export default Card;
