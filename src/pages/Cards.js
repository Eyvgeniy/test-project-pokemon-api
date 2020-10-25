import { useState, useEffect } from 'react';
import getPokemonsData from '../API';
import NavBar from '../components/NavBar';
import Selector from '../components/Selector';
import svg from '../logo.svg'
import '../App.css'

const defaultQuery = { types: '', subtype: '', page: 1, pageSize: 4 };
const cardsPath = 'cards';
const selectors = [{path: 'types', name: 'types'}, { path: 'subtypes', name: 'subtype'}]
const defaultSelectorsState = selectors.reduce((acc, {path}) => ({ ...acc, [path]: [] }), {});

const Cards = () => {
  const [query, setQuery] = useState(defaultQuery);
  const [types, setTypes] = useState(defaultSelectorsState);
  const [isLoadingSelectors, setIsLoadingSelectors] = useState(false);

  useEffect(() => {
    setIsLoadingSelectors(true);
    const fetchSelectorsData = (list) => {
      list.forEach(async ({ path }) => {
        const { data } = await getPokemonsData(path);
        setTypes((state) => ({ ...state, [path]: data[path] }));
        setIsLoadingSelectors(false);
      });  
    };
    fetchSelectorsData(selectors);
  }, []);

  useEffect(() => {
    const fetchCardsData = async (path) => {
      const data = await getPokemonsData(path, query);
    };
    fetchCardsData(cardsPath);
  }, [query])

  return (
    <div className="container-fluid h-100 d-flex flex-column ">
      <NavBar />
      <div className="row mt-2 flex-grow-1">
        <div className="col-5 d-flex">
          <div className="border" style={{ backgroundColor: '#FAFAFA' }}>
            {selectors.map(({path, name}, i) => (
              <Selector
                key={i}
                name={name}
                setQuery={setQuery}
                list={types[path]}
                isLoading={isLoadingSelectors}
              />
            ))}
          </div>
        </div>
        <div className="col-7 d-flex">
            <div className='bg-light border h-100 w-100'>{
              isLoadingSelectors && <img className='app-logo-spin' src={svg} alt='loading'/>
            }</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
