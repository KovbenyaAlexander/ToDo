import React from 'react';

import ItemFilter from './ItemFilter/ItemFilter';
import SearchPanel from './SearchPanel/SearchPanel';

import './TodoSettings.css'
const TodoSettings = (props) => {
  return (
    <div className="todoSettings">
      <SearchPanel sortTasks={props.sortTasks}
        searchText={props.searchText} />
      <ItemFilter
        showAll={props.showAll}
        showActive={props.showActive}
        showDone={props.showDone}
        showingAllTasks={props.showingAllTasks}
        showingActiveTasks={props.showingActiveTasks}
        showingDoneTasks={props.showingDoneTasks} />
    </div>
  )
}

export default TodoSettings;