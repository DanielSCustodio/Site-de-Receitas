import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AppContext = React.createContext();

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [searchType, setSearchType] = useState();
  const [searchInput, setSearchInput] = useState();
  const { pathname } = useLocation();

  const contextValue = {
    data,
    setData,
    setSearchType,
    setSearchInput,
    searchInput,
    pathname,
    searchType,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export const useAppContext = () => React.useContext(AppContext);

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
