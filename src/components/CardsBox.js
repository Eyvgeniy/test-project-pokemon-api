import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

const CardsBox = ({ cards, showModal }) => {
  const { url } = useRouteMatch();

  return (
    <div className="d-flex flex-wrap justify-content-center aligh-items-center overflow-auto">
      {cards &&
        cards.map((card, i) => {
          return (
            <div className="card w-25 my-3 mx-4 shadow" key={i}>
              <img
                src={card.imageUrl}
                className="card-img-top"
                alt="..."
                onClick={showModal(card.name, card.imageUrlHiRes)}
              />
              <div className="card-body p-1 h-25">
                <Link to={{ pathname: `${url}/${card.id}`, state: card }}>{card.name}</Link>
                <p className="card-text">{card.artist}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CardsBox;

CardsBox.propTypes = {
  cards: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
};
