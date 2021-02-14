import React from 'react';

const SearchPanel = (props) => {
  const onSortTasks = (e) => {
    props.sortTasks(e.target.value);
  }
  return (
    <input className='searchInput form-control' onChange={onSortTasks} value={props.searchText} placeholder='type to search...'></input>
  )
}

export default SearchPanel;
