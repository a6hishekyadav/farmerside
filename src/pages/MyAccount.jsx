import React from 'react';
import profile from "./images/profile.png"


const MyAccount = () => {
    return (
       <>
       <h1>MyAccount</h1><br />
      <section className='accountDetails'>
        <div className='profile-pic'><img src={profile} alt="pp" /></div>
        <div className='details'>
             
                <label htmlFor="name">Name : {}</label><br />
                <label htmlFor="seller_id">Seller Id : {}</label><br />
                <label htmlFor="Address">Address : {}</label><br />
                <label htmlFor="District">District : {}</label><br />
                <label htmlFor="Pincode">Pincode : {}</label><br />
                <label htmlFor="contact_details">Contact no : {}</label>
             
        </div>
      </section>
      </>
    );
};

export default MyAccount;