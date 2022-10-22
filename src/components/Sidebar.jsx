import React, { useState } from 'react';
import {
    FaBars,
    
}from "react-icons/fa";
import { FcAddDatabase,FcFaq,FcAbout,FcSurvey,FcManager,FcAssistant } from "react-icons/fc";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/CreateRequest",
            name: "Create Request",
            icon:< FcAddDatabase size={30}/>
        },
        {
            path:"/sellhistory",
            name:"Sell History",
            icon:<FcSurvey size={30}/>
        },
        {
            path:"/Notification",
            name:"Notification",
            icon:<FcAbout size={30}/>
            
        },
        {
            path:"/Grievances",
            name:"Grievances",
            icon:<FcAssistant size={30}/>
        },
        {
            path:"/FAQ",
            name:"FAQs",
            icon:<FcFaq size={30}/>
        },
        {
            path:"/MyAccount",
            name:"MyAccount",
            icon:<FcManager size={30} />
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "250px" : "65px"}} className="sidebar">
               <div className="top_section" onClick={toggle}>
               
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Menu</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>

          
        </div>
    );
};

export default Sidebar;