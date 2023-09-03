import React, {useState} from 'react';
import classnames from 'classnames';
import {NavLink} from "react-router-dom";
import logo from "../../assets/image/dummy-logo-5b.png";
import  "../../assets/css/style.css";

const tab = [
    {
        name: "Overview",
        url:"/"
    },
    {
        name:"About Us",
        url:"/"
    },
    {
        name:"Manufacturing",
        url:"/"
    },
    {
        name:"Design Studio",
        url:"/"
    },
    {
        name:"Sustainability",
        url:"/"
    },
    {
        name:"Diversification",
        url:"/"
    },
    {
        name:"Contact",
        url:"/"
    }
]
const Header = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div>
           <section className={'w-full bg-emerald-500'}>
               <div className={'flex  md:items-center  md:justify-between md:flex-row flex-col px-4'}>
                   <div className={'py-4 flex justify-between'}>
                       {/*<h1 className={'border-2 border-white rounded p-2 text-2xl text-white font-bold uppercase'}>Hotel Logo</h1>*/}
                       <NavLink to={'/'}>
                           <img className={'h-20 w-44'} src={logo}/>
                       </NavLink>
                       <div className={'hamburger md:hidden flex items-center pr-5'}>
                           <span onClick={()=>setOpenMenu(true)} className={`${openMenu?"hidden": ""} material-icons text-white`}>menu</span>
                           <span onClick={()=>setOpenMenu(false)} className={`${openMenu?"": "hidden"} material-icons text-white`}> close </span>
                       </div>
                   </div>
                   <div className={openMenu?"menu-active": ""}>
                       <div className={'menu flex md:items-center md:flex-row flex-col md:justify-end'}>
                           {
                               tab.map((v,i)=>(
                                   <NavLink to ={v.url}
                                            onClick={()=>setActiveTabIndex(i)}
                                            key={`profile-tab-${i}`}
                                            className={classnames(activeTabIndex === i ? "active border-b-4 border-white-600 hover:border-black": "", " mx-4 pb-4 text-white text-sm  underline-offset-8 hover:text-black")}>
                                             {v.name}
                                   </NavLink>
                               ))
                           }
                       </div>
                   </div>

               </div>
           </section>
        </div>
    );
};

export default Header;