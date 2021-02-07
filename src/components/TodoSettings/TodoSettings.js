import React from 'react';

import ItemFilter from './ItemFilter/ItemFilter';
import SearchPanel from './SearchPanel/SearchPanel';

import './TodoSettings.css'
const TodoSettings = () => {
  return (
    <div className="todoSettings">
      <SearchPanel />
      <ItemFilter />
    </div>
  )
}

export default TodoSettings;