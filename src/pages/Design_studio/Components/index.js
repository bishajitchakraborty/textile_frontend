import React from 'react';
import {Link, NavLink} from "react-router-dom";
import img from '../../../assets/image/Ladies-Blouse.jpg';
import dress_img from "../../../assets/image/tshirt_2.png";
const Index = () => {
    return (
        <div>
            <div className={'w-full sm:w-4/5  mx-auto  text-center text-xl text-black'}>
                <h2
                    className={'w-full border border-emerald-600 py-5 md:text-3xl text-xl uppercase font-bold text-emerald-600 '}>xyz</h2>
            </div>
            <section className={'sm:w-4/5 mx-auto text-emerald-600 border-b border-emerald-600 sm:p-0 p-2'}>
                <div className={' flex flex-wrap  mt-2 mb-10'}>
                    {
                        [1,1,1,1,1,1,1,1].map((v,i)=>(
                            <div className={'sm:w-1/4 w-full'} key={i}>
                                <div className={'mt-4 m-1 bg-white border border-emerald-600 '}>
                                    {/*<div className={'relative'}>*/}
                                    {/*    <img width={500} className={'h-80 object-contain p-4'} src={dress_img}/>*/}
                                    {/*</div>*/}

                                        <div className={'w-full p-2 text-gray-500 hover:text-emerald-600'}>
                                            <div className={'relative'}>
                                                <img width={500} className={'h-80 object-contain p-4'} src={dress_img}/>
                                            </div>
                                            <NavLink to={'/design/subCategory/product_details/'}>
                                                <div className={'justify-center flex'}>
                                                    <button
                                                        className="w-32 uppercase font-semibold align-center items-center flex justify-center  bg-white py-4 text-sm">
                                                        Details
                                                    </button>
                                                </div>
                                            </NavLink>
                                        </div>
                                    {/*</div>*/}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default Index;