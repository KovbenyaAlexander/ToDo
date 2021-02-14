import React from 'react';

const ItemFilter = (props) => {

  const activeClassButton = 'btn btn-info';
  const inActiveClassButton = 'btn btn-outline-secondary';

  return (
    <div>
      <button onClick={props.showAll} className={props.showingAllTasks ? activeClassButton : inActiveClassButton}>All</button>
      <button onClick={props.showActive} className={props.showingActiveTasks ? activeClassButton : inActiveClassButton}>Active</button>
      <button onClick={props.showDone} className={props.showingDoneTasks ? activeClassButton : inActiveClassButton}>Done</button>
    </div>
  )
}

export default ItemFilter;
