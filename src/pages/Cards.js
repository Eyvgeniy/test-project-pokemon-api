import { useState, useEffect } from 'react';
import getPokemonsData from '../API';
import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import Selector from '../components/Selector';
import Loader from '../components/Loader';
import CardsBox from '../components/CardsBox';
import PaginateBox from '../components/PaginateBox';
import Card from '../components/Card';
import Modal from '../components/Modal';
import '../App.css';

const defaultQuery = { types: '', subtype: '', page: 1, pageSize: 6 };
const cardsPath = 'cards';
const selectors = [
  { path: 'types', name: 'types' },
  { path: 'subtypes', name: 'subtype' },
];
const defaultSelectorsState = selectors.reduce((acc, { path }) => ({ ...acc, [path]: [] }), {});
const defaultCards = { cards: [], total: 0 };
const defaultPokemon = { pokemon: { name: '', img: '' }, show: null };
const setCurrentPage = (setQuery) => (page) => setQuery((state) => ({ ...state, page }));
const setSelectorValue = (setQuery) => (target) =>
  setQuery((state) => ({
    ...state,
    [target.name]: target.value,
  }));

const Cards = ({ logout }) => {
  const [query, setQuery] = useState(defaultQuery);
  const [types, setTypes] = useState(defaultSelectorsState);
  const [cards, setCards] = useState(defaultCards);
  const [showModal, setShowModal] = useState(defaultPokemon);
  const [isLoadingSelectors, setIsLoadingSelectors] = useState(false);
  const [isLoadingCards, setIsLoadingCards] = useState(false);
  const { path } = useRouteMatch();
  const { pathname } = useLocation();

  useEffect(() => {
    setIsLoadingSelectors(true);
    const fetchSelectorsData = (list) => {
      list.forEach(async ({ path }) => {
        try {
          const { data } = await getPokemonsData(path);
          setTypes((state) => ({ ...state, [path]: data[path] }));
          setIsLoadingSelectors(false);
        } catch (err) {
          alert(err);
        }
      });
    };
    fetchSelectorsData(selectors);
  }, []);

  useEffect(() => {
    if (query.types === '' && query.subtype === '') {
      setCards(defaultCards);
      return;
    }
    setIsLoadingCards(true);
    const fetchCardsData = async (path) => {
      try {
        const { data, total } = await getPokemonsData(path, query);
        setCards({ cards: data.cards, total: Number(total) });
        setIsLoadingCards(false);
      } catch (err) {
        alert(err);
      }
    };
    fetchCardsData(cardsPath);
  }, [query]);

  return (
    <div className="container h-100 d-flex flex-column ">
      {showModal.show && (
        <Modal pokemon={showModal.pokemon} closeModal={() => setShowModal(defaultPokemon)} />
      )}
      <NavBar isLinkBack={pathname !== '/cards'} logout={logout} />
      <div className="row my-2 d-flex flex-grow-1">
        <Switch>
          <Route exact path={path}>
            <div className="col-md-3 d-flex">
              <div
                className="border w-100 d-flex flex-column align-items-center"
                style={{ backgroundColor: '#FAFAFA' }}
              >
                {selectors.map(({ path, name }, i) => (
                  <Selector
                    key={i}
                    name={name}
                    setValue={setSelectorValue(setQuery)}
                    list={types[path]}
                    isLoading={isLoadingSelectors}
                    query={query}
                  />
                ))}
              </div>
            </div>
            <div className="col-md-9 flex-grow-1">
              <div className="border h-100 d-flex flex-column justify-content-between">
                {isLoadingCards || isLoadingSelectors ? (
                  <Loader />
                ) : (
                  <CardsBox
                    cards={cards.cards}
                    showModal={(name, imgLink) => () =>
                      setShowModal({ show: true, pokemon: { name, img: imgLink } })}
                  />
                )}
                <PaginateBox
                  page={query.page}
                  pageSize={query.pageSize}
                  total={cards.total}
                  setPage={setCurrentPage(setQuery)}
                />
              </div>
            </div>
          </Route>
          <Route path={`${path}/:cardId`}>
            <Card cards={cards.cards} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Cards;

Cards.propTypes = {
  logout: PropTypes.func.isRequired,
};
