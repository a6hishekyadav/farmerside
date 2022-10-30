import React from 'react';
import "./creatreq.css";

function CreateRequest() {
  return (
    <>
      <h1>Create Request</h1><br />
      <div className='record_div'>
        <form method='POST'>
          <label>Select Product : </label>
          <select className='Products'>
            <option value="opt">Select Products to Add</option>
            <option value="wheat">Wheat</option>
            <option value="rice">Rice</option>
            <option value="corn">Corn</option>
            <option value="Maize">Maize</option>
          </select><br /><br />
          <label htmlFor="quantity">Quantity : </label>
          <input type="number" id="quantity" name="quantity" min="1" />
          <select>
            <option value="unit">Units</option>
            <option value="kg">kgs</option>
            <option value="quintal">Quintal</option>
          </select><br /><br />
          <label htmlFor="cost">Government issued price: </label>
          <input type="number" readOnly /><br /><br />
          <button >SUBMIT</button>
        </form>
      </div>
    </>
  )
}


export default CreateRequest;