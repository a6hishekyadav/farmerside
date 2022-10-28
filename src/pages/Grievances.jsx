import React from 'react';

const Grievances = () => {
    return (
       <>
       <h1>Grievances</h1><br />
       <div>
        <h3>Have an query or complaint? Let us know!!!</h3><br />
        <div>
            <textarea name="complaint" id="complaint" cols="70" rows="10"></textarea><br />
             <button>SUBMIT</button>
        </div>
       </div>
       </>
    );
};

export default Grievances;