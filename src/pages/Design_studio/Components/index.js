import React from 'react';
import {Link, NavLink} from "react-router-dom";
import img from '../../../assets/image/Ladies-Blouse.jpg';
import dress_img from "../../../assets/image/dress_1.jpeg";
const Index = () => {
    return (
        <div>
            <div className={'w-11/12 mx-auto  text-center text-xl text-black'}>
                <h2
                    className={'w-full border py-5 md:text-3xl text-xl uppercase font-bold text-gray-500 bg-gray-200'}>xyz</h2>
            </div>
            <section className={'sm:w-4/5 mx-auto text-emerald-600 border-b border-gray-300 sm:p-0 p-2'}>
                <div className={' flex flex-wrap  mt-2 mb-10'}>
                    {
                        [1,1,1,1,1,1,1,1].map((v,i)=>(
                            <div className={'sm:w-1/4 w-full'} key={i}>
                                <div className={'m-2 bg-white border border-gray-300 '}>
                                    <div className={'relative'}>
                                        <img className={''} src={dress_img}/>
                                    </div>
                                    <div className={'pl-4 pb-8'}>
                                        <h2 className={'py-2 pt-4 text-center italic text-xl text-emerald-600'}><span className={''}>Model Fashion</span></h2>
                                    </div>
                                        <div className={'w-1/2 p-2'}>
                                            <NavLink to={'/login'}>
                                                <div className={'justify-center flex'}>
                                                    <button
                                                        className= "w-32 uppercase font-semibold align-center items-center flex justify-center text-center text-gray-500  bg-white py-4 text-sm">
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