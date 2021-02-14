import React from 'react';

import ItemFilter from './ItemFilter/ItemFilter';
import SearchPanel from './SearchPanel/SearchPanel';

import './TodoSettings.css'
const TodoSettings = (props) => {
  return (
    <div className="todoSettings">
      <SearchPanel sortTasks={props.sortTasks}
        searchText={props.searchText} />
      <ItemFilter />
    </div>
  )
}

export default TodoSettings;