import React from 'react';
import design from "../../assets/image/design.jpeg";
import {NavLink} from "react-router-dom";

import dress_img from '../../assets/image/dress_1.jpeg';
import design_studio from "../../assets/image/design-studio.jpg";
const Design = () => {
    return (
        <div>
            <div className="w-full bg-center  contact_image md:h-128  relative"
                 style={{backgroundImage: `url(${design})`}}>
                <div
                    className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1
                            className="mobile:text-6xl text-3xl tracking-widest font-semibold text-white uppercase lg:text-3xl">Design Studio</h1>

                    </div>
                </div>
                <svg className={'absolute -bottom-0.5 md:-bottom-1 z-20'} id="wave" style={{transform: 'rotate(0deg)', transition: "0.3s"}} viewBox="0 0 1440 110"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg">
                    <path style={{transform: "translate(0, 0px)", opacity: "1"}} fill={"#fff"}
                          d="M0,84L80,91C160,98,320,112,480,100.3C640,89,800,51,960,32.7C1120,14,1280,14,1440,23.3C1600,33,1760,51,1920,65.3C2080,79,2240,89,2400,91C2560,93,2720,89,2880,91C3040,93,3200,103,3360,93.3C3520,84,3680,56,3840,58.3C4000,61,4160,93,4320,95.7C4480,98,4640,70,4800,63C4960,56,5120,70,5280,72.3C5440,75,5600,65,5760,51.3C5920,37,6080,19,6240,14C6400,9,6560,19,6720,37.3C6880,56,7040,84,7200,86.3C7360,89,7520,65,7680,51.3C7840,37,8000,33,8160,39.7C8320,47,8480,65,8640,63C8800,61,8960,37,9120,28C9280,19,9440,23,9600,37.3C9760,51,9920,75,10080,86.3C10240,98,10400,98,10560,84C10720,70,10880,42,11040,28C11200,14,11360,14,11440,14L11520,14L11520,140L11440,140C11360,140,11200,140,11040,140C10880,140,10720,140,10560,140C10400,140,10240,140,10080,140C9920,140,9760,140,9600,140C9440,140,9280,140,9120,140C8960,140,8800,140,8640,140C8480,140,8320,140,8160,140C8000,140,7840,140,7680,140C7520,140,7360,140,7200,140C7040,140,6880,140,6720,140C6560,140,6400,140,6240,140C6080,140,5920,140,5760,140C5600,140,5440,140,5280,140C5120,140,4960,140,4800,140C4640,140,4480,140,4320,140C4160,140,4000,140,3840,140C3680,140,3520,140,3360,140C3200,140,3040,140,2880,140C2720,140,2560,140,2400,140C2240,140,2080,140,1920,140C1760,140,1600,140,1440,140C1280,140,1120,140,960,140C800,140,640,140,480,140C320,140,160,140,80,140L0,140Z"/>
                </svg>
            </div>



            <section className="w-full md:w-4/6 mx-auto text-emerald-600 body-font">
                {/*<h2 className={'text-center text-4xl italic'}>Our Concepts</h2>*/}
                <div className=" pt-10 pb-24 mx-auto flex flex-wrap">
                    <div
                        className="flex flex-col flex-wrap md:py-6 -mb-10 md:w-1/2 md:pl-12 md:text-left text-center">
                        <div className="flex flex-col mb-4 md:items-start items-center">
                            <div className="flex-grow">
                                <p className="leading-relaxed text-sm italic">
                                    Miami Associates (BD) started its journey in the beginning of 1990 with the objective to import,
                                    supply, marketing and trading various kinds of Products & services to national & multinational company
                                    in Bangladesh. Presently Miami Associates (BD) is operating its Business with permanent setup in
                                    Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence.
                                </p>
                            </div>
                        </div>



                    </div>
                    <div className="sm:w-1/2 w-full mb-10 sm:mb-0 rounded-tablet overflow-hidden">
                        <img alt="feature" className="md:object-cover object-contain object-center md:min-h-full h-60 w-full"
                             src={design_studio}/>
                    </div>
                </div>
            </section>

            {/*<--------------------------------------------------Start Packages Protion  For Hotel------------------------------------------------------->*/}
            <section className={'sm:w-3/5 mx-auto text-emerald-600 border-b border-gray-300 sm:p-0 p-2'}>
                <div className={'my-4 '}>
                    <h2 className={'text-center text-4xl italic'}>Our Concepts</h2>
                </div>
                <div className={' flex flex-wrap  mt-2 mb-10'}>
                    {
                        [1,1,1,1,1,1].map((v,i)=>(
                                    <div className={'sm:w-1/3 w-full'} key={i}>
                                        <div className={'m-2 bg-white border border-gray-300 '}>
                                            <div className={'relative'}>
                                                <img className={''} src={dress_img}/>
                                            </div>
                                            <div className={'pl-4 pb-8'}>
                                                <h2 className={'py-2 pt-4 text-center italic text-xl text-emerald-600'}><span className={''}>Model Fashion</span></h2>
                                            </div>
                                            {/*<div className={' w-full mx-auto pb-10 pt-4 px-4'}>*/}
                                            {/*    <p className={'text-sm  text-gray-700'}>*/}
                                            {/*      xyzbhdvchcb*/}
                                            {/*    </p>*/}
                                            {/*</div>*/}
                                            {/*<div className={'flex pb-4'}>*/}
                                            {/*    <div className={'w-1/2 p-2 pl-4'}>*/}
                                            {/*        <p className={'text-xs'}>{v.offerTittle}</p>*/}
                                            {/*        <h2 className={'text-lg font-semifont'}>EUR {v.price}</h2>*/}
                                            {/*        <p className={'text-xs'}>{v.offerAllow}</p>*/}
                                            {/*    </div>*/}
                                            {/*    <div className={'w-1/2 p-2'}>*/}
                                            {/*        <NavLink to={'/login'}>*/}
                                            {/*            <button*/}
                                            {/*                className="w-full flex justify-center  mx-auto text-white bg-red-700 py-4 focus:outline-none hover:bg-red-900  text-sm">*/}
                                            {/*                Book Now*/}
                                            {/*            </button>*/}
                                            {/*        </NavLink>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                ))
                    }
                </div>
            </section>
            {/*<--------------------------------------------------End Packages Protion  For Hotel------------------------------------------------------->*/}


        </div>
    );
};

export default Design;