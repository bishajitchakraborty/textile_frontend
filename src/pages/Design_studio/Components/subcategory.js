import React from 'react';
import {NavLink} from "react-router-dom";
import category from "../../../assets/image/tshirt_1.png";

const Subcategory = () => {
    return (
        <div>
            <div className={'bg-white'}>
                <div className={'md:w-8/12 mx-auto px-4 text-center text-xl text-emerald-600 pt-10 '}>
                    <h2
                        className={'w-full border border-emerald-600 py-5 tablet:text-3xl text-xl uppercase font-bold'}>Women's Wear</h2>
                </div>
                <div className={'md:w-8/12 full mx-auto  flex flex-wrap'}>
                    {
                        [1,1,1,1,1,1].map((v,i)=>(
                            <div className={'md:w-1/3 my-10 w-full '}>
                                <NavLink to={'/design/category/subCategory'}>
                                    <div className={'mx-4 bg-white border border-emerald-600 mb-8'}>
                                        <img src={category} alt={"aa"} width={500}
                                             className={'h-96 px-4 py-4 object-cover w-full transition-all ease-linear duration-100'}/>
                                        <h2 className={'text-center bg-white text-emerald-600 text-xl border-t border-emerald-600  py-4'}>Ladies-Blouse</h2>
                                    </div>
                                </NavLink>

                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Subcategory;