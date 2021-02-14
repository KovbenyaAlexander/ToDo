import React from 'react';
import './ItemAddForm.css'

const ItemAddForm = (props) => {
  const onInputChange = (e) => {
    props.onInputChange(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onAdd();
  }

  return (
    <form onSubmit={onFormSubmit} className="item-add-form d-flex">
      <input className="formInput form-control" value={props.inputText} type="text" onChange={onInputChange} placeholder='What needs to be done'></input>
      <button className="formSubmitBtn btn btn-success">Add</button>
    </form>
  )
}

export default ItemAddForm;
