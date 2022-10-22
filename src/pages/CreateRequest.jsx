import React from 'react';

function CreateRequest() {
   
  
    return (
      <>
      <h1>Create Request</h1><br />
      <div>
      <form>
        <label>Select Product:
          <select
            
          >
           <option value="wheat">Wheat</option>
           <option value="rice">Rice</option>
           <option value="corn">Corn</option>
           <option value="Maize">Maize</option>
          </select>
        </label><br /><br /><br />
        <label htmlFor="quantity">Quantity : </label>
        <input type="text" />
        <br /><br />
         <label htmlFor="cost">Government issued price: </label>
         <input type="text" readOnly /><br /><br />
         <button>SUBMIT</button>
      </form>
      </div>
      </>
    )
  }
  

export default CreateRequest ;