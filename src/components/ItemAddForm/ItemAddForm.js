import React from 'react';


const ItemAddForm = (props) => {

  console.log(props);


  const onInputChange = (e) => {
    props.onInputChange(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onAdd();
  }


  return (
    <form onSubmit={onFormSubmit} className="item-add-form d-flex">
      <input value={props.inputText} type="text" onChange={onInputChange}></input>
      <button className="btn btn-success">Add</button>
    </form>
  )

}



export default ItemAddForm;
