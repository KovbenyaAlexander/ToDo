import React from 'react';
import './AppHeader.css'
const AppHeader = (props) => {
  // console.log(props);

  const countOfDoneTasks = props.todos.filter(item => item.isDone).length;
  const countOfActiveTasks = props.todos.filter(item => !item.isDone).length;
  return (
    < header className="header">
      <h1 className="display-3">ToDo APP</h1>
      <div className="header-statistics">
        <p>Count of active tasks {countOfActiveTasks}</p>
        <p >Count of completed tasks {countOfDoneTasks}</p>
      </div>
    </header >
  )
}



export default AppHeader;

