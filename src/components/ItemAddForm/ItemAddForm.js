import React from 'react';


const ItemAddForm = (props) => {

  return (
    <div className="item-add-form">
      <button onClick={() => props.onAdd('new item')} className="btn btn-success">Add</button>
    </div>
  )

}



export default ItemAddForm;
