import React from "react";

import {
  Search,
  Filter
} from 'react-bootstrap-icons';
import './CSS/mobile.css';
import './CSS/desktop.css';

const QueryActions = (props) => {
  const [categorias, setCategorias] = React.useState([]);
  const [search, setSearch] = React.useState(false);
  const [filter, setFilter] = React.useState(false);

  const SearchAction = () => {
    if (props.forSearch) {
      return (
        <div className="actions__search">
          <div className="search__icon" onClick={() => { setSearch(!search); setFilter(false) }}><Search /></div>
          <input className={search ? "active search__input" : "search__input"} type="search" placeholder="Pesquisar" name="query" />
        </div>
      );
    }
  }

  const FilterAction = () => {
    if (props.forFilter) {
      return (
        <div className="actions__select">
          <div className="select__icon" onClick={() => { setFilter(!filter); setSearch(false) }}><Filter /></div>
          <select className={filter ? "active select__filter" : "select__filter"} id="categoria-filter">
            <option defaultChecked value="Todas">Todas</option>
            {categorias.map(categoria => {
              return <option className="categoria" value={categoria.name}>{categoria.name}</option>
            })}
          </select>
        </div>
      );
    }
  }

  return (
    <div className="query__actions">
      <SearchAction />
      <FilterAction />
    </div>
  );
}

export default QueryActions;