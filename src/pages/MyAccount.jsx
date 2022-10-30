import React from 'react';
import profile from "./images/profile.png"


const MyAccount = () => {
  return (
    <>
      <h1>MyAccount</h1><br />
      <section className='accountDetails'>
        <div className='profile-pic'><img src={profile} alt="pp" /></div>
        <div className='details'>
          <label className="acc_label" htmlFor="name">Name : { }</label><br />
          <label className="acc_label" htmlFor="seller_id">Seller Id : { }</label><br />
          <label className="acc_label" htmlFor="Address">Address : { }</label><br />
          <label className="acc_label" htmlFor="District">District : { }</label><br />
          <label className="acc_label" htmlFor="Pincode">Pincode : { }</label><br />
          <label className="acc_label" htmlFor="contact_details">Contact no : { }</label>

        </div>
      </section>
    </>
  );
};

export default MyAccount;