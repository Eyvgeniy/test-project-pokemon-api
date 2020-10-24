import { useState, useEffect } from 'react';
import getPokemonsData from '../API';
import NavBar from '../components/NavBar';
import Selector from '../components/Selector';

const defaultQuery = { types: '', subtype: '', page: 1, pageSize: 4 };
const paths = ['types', 'subtype'];
const selectors = ['types', 'subtypes'];
const defaultSelectorsState = selectors.reduce((acc, type) => ({ ...acc, [type]: [] }), {});

const Cards = () => {
  const [query, setQuery] = useState(defaultQuery);
  const [types, setTypes] = useState(defaultSelectorsState);
  const [isLoadingSelectors, setIsLoadingSelectors] = useState(false);
  // const [subtypes, setSubtypes] = useState([]);

  useEffect(() => {
    setIsLoadingSelectors(true);
    const fetchSelectorsData = (list) => {
      list.forEach(async (element) => {
        const { data } = await getPokemonsData(element);
        setTypes((state) => ({ ...state, [element]: data[element] }));
        setIsLoadingSelectors(false);
      });
    };
    fetchSelectorsData(paths);
  }, []);

  return (
    <div className="container-fluid h-100">
      <NavBar />
      <div className="row mt-2">
        <div className="col-5">
          <div className="border" style={{ backgroundColor: '#FAFAFA' }}>
            {Object.keys(types).map((type, i) => (
              <Selector
                key={i}
                name={type}
                setQuery={setQuery}
                list={types[type]}
                isLoading={isLoadingSelectors}
              />
            ))}
          </div>
        </div>
        <div className="col-7 bg-light"></div>
      </div>
    </div>
  );
};

export default Cards;
