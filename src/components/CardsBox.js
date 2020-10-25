import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

const CardsBox = ({ cards }) => {
  const { url } = useRouteMatch();
  console.log(url);

  return (
    <div className="d-flex flex-wrap justify-content-center aligh-items-center">
      {cards.map((card, i) => {
        return (
          <div className="card w-25 my-2 mx-4" key={i}>
            <img src={card.imageUrl} className="card-img-top" alt="..." />
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
};
