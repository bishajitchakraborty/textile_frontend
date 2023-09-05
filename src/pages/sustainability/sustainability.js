import React from 'react';
import design from "../../assets/image/design.jpeg";
import img from "../../assets/image/contact.jpg";
import home_11 from "../../assets/image/home_slider_1.jpg";
import certified from "../../assets/image/BSCI.jpg";

const Sustainability = () => {
    return (
        <div>
            <div className="w-full bg-center  contact_image md:h-128  relative"
                 style={{backgroundImage: `url(${design})`}}>
                <div
                    className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1
                            className="mobile:text-6xl text-3xl tracking-widest font-semibold text-white uppercase lg:text-3xl">Sustainability</h1>

                    </div>
                </div>
                <svg className={'absolute -bottom-0.5 md:-bottom-1 z-20'} id="wave" style={{transform: 'rotate(0deg)', transition: "0.3s"}} viewBox="0 0 1440 110"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg">
                    <path style={{transform: "translate(0, 0px)", opacity: "1"}} fill={"#fff"}
                          d="M0,84L80,91C160,98,320,112,480,100.3C640,89,800,51,960,32.7C1120,14,1280,14,1440,23.3C1600,33,1760,51,1920,65.3C2080,79,2240,89,2400,91C2560,93,2720,89,2880,91C3040,93,3200,103,3360,93.3C3520,84,3680,56,3840,58.3C4000,61,4160,93,4320,95.7C4480,98,4640,70,4800,63C4960,56,5120,70,5280,72.3C5440,75,5600,65,5760,51.3C5920,37,6080,19,6240,14C6400,9,6560,19,6720,37.3C6880,56,7040,84,7200,86.3C7360,89,7520,65,7680,51.3C7840,37,8000,33,8160,39.7C8320,47,8480,65,8640,63C8800,61,8960,37,9120,28C9280,19,9440,23,9600,37.3C9760,51,9920,75,10080,86.3C10240,98,10400,98,10560,84C10720,70,10880,42,11040,28C11200,14,11360,14,11440,14L11520,14L11520,140L11440,140C11360,140,11200,140,11040,140C10880,140,10720,140,10560,140C10400,140,10240,140,10080,140C9920,140,9760,140,9600,140C9440,140,9280,140,9120,140C8960,140,8800,140,8640,140C8480,140,8320,140,8160,140C8000,140,7840,140,7680,140C7520,140,7360,140,7200,140C7040,140,6880,140,6720,140C6560,140,6400,140,6240,140C6080,140,5920,140,5760,140C5600,140,5440,140,5280,140C5120,140,4960,140,4800,140C4640,140,4480,140,4320,140C4160,140,4000,140,3840,140C3680,140,3520,140,3360,140C3200,140,3040,140,2880,140C2720,140,2560,140,2400,140C2240,140,2080,140,1920,140C1760,140,1600,140,1440,140C1280,140,1120,140,960,140C800,140,640,140,480,140C320,140,160,140,80,140L0,140Z"/>
                </svg>
            </div>
            <div>
                <section className="text-emerald-600 body-font mt-16">
                    <div className=" w-full md:w-4/6 mt-4 mx-auto mx-auto flex flex-wrap">
                        <div className="sm:w-1/2 w-full mb-10 md:px-2 px-4 sm:mb-0 rounded-tablet overflow-hidden">
                            <img alt="feature" className="md:object-cover object-contain object-center md:min-h-full h-60 w-full"
                                 src={home_11}/>
                        </div>
                        <div className="flex flex-col flex-wrap px-4 md:px-2 md:py-6 -mb-10 md:w-1/2  md:text-left text-center">
                            <div className="flex flex-col mb-4 md:items-start items-center">
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-sm italic">
                                        Miami Associates (BD) started its journey in the beginning of 1990 with the objective to import,
                                        supply, marketing and trading various kinds of Products & services to national & multinational company
                                        in Bangladesh.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:items-start items-center">
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-sm italic">
                                        Miami Associates (BD) started its journey in the beginning of 1990 with the objective to import,
                                        supply, marketing and trading various kinds of Products & services to national & multinational company
                                        in Bangladesh.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col mb-4 md:items-start items-center">
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-sm italic">
                                        Miami Associates (BD) is the appointed agent of BASF’s Intermediates division in Bangladesh.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col mb-10 md:items-start items-center">
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-sm italic">
                                        Miami Associates (BD) also has business of Hot-melt adhesive, Poultry Feed Ingredients and Doctor
                                        blade for rotogravure & flexo printing machine.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className={'md:w-5/6 w-full mx-auto'}>
                <div className="flex flex-col text-center text-primary w-full my-20">
                    <span className="material-icons text-emerald-600 text-8xl">verified_user</span>
                    <span className={'text-2xl md:text-4xl flex justify-center items-center'}>
                        <span className={'w-10 md:w-40 h-1 bg-emerald-600 mr-3'}/>
                           Certified Audits
                        <span className={'w-10 md:w-40 h-1 bg-emerald-600 ml-3'}/>
                    </span>
                </div>
                <div className={'flex flex-wrap justify-center'}>
                    {
                        [1,1,1,1,1,1,1].map((v,i)=>(
                            <div className={'w-full md:w-1/3  p-2  text-emerald-600 italic'}>
                                <div className={'border rounded-xl border-emerald-600 p-4'}>
                                    {/*<h2 className={'text-sm md:text-xl'}>Visual Merchandiser:  Skills, Duties and Job Description</h2>*/}
                                    <div className={'flex flex-wrap py-4'}>
                                        <div className={'w-full  md:w-1/2 mb-8 md:mb-4 merchandiser_thumbnail'}>
                                            <img className={'h-20'} src={certified}/>
                                        </div>
                                        <div className={'w-full md:w-1/2'}>
                                            <p className={'text-sm'}>
                                                BSCI, a program of the Foreign Trade Association of Europe,
                                                is designed to improve working conditions for the suppliers of BSCI's participating member companies.                                        </p>
                                            {/*<div className={'pt-4 justify-start flex'}>*/}
                                            {/*    <button*/}
                                            {/*        // onClick={sendMessage}*/}
                                            {/*        className="w-32 align-center items-center flex justify-center  text-white  bg-emerald-600 py-4   text-sm">*/}
                                            {/*        Send*/}
                                            {/*    </button>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))

                    }
                </div>
            </div>

        </div>
    );
};

export default Sustainability;