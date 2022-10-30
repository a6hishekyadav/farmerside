import React from 'react';


const SellHistory = () => {
    return (
        <>
        <h1>Sell History</h1><br />
        <div className='sell_history'>
            <label htmlFor="requestid"><b>Request id :</b> {}</label><br />
            <label htmlFor="productName">Product : {} </label><br />
            <label htmlFor="Quantity"> Quantity : </label><br />
            <label htmlFor="cost"> Price/Unit : {}</label><br />
            <label htmlFor="Total Cost"> Total Cost : {}</label><br />
            <label htmlFor="status"><b>Status :</b>  {} </label><br />
        </div>
        </>
    );
};

export default SellHistory;