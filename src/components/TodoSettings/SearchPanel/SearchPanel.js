import React from 'react';

const SearchPanel = (props) => {
  // console.log(props);
  const onSortTasks = (e) => {
    props.sortTasks(e.target.value);
  }
  return (
    <input onChange={onSortTasks} value={props.searchText}></input>
  )
}



export default SearchPanel;
