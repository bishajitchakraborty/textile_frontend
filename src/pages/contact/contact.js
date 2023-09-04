import React from 'react';
import img from "../../assets/image/img_3.png";
import '../../assets/css/style.css';
import wave from "../../assets/image/wave.svg";
const Contact = () => {
    return (
        <div>
            <div className="w-full bg-center  contact_image md:h-128  relative"
                 style={{backgroundImage: `url(${img})`}}>
                {/*<div*/}
                {/*    className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">*/}
                {/*    <div className="text-center">*/}
                {/*        <h1*/}
                {/*            className="mobile:text-6xl text-3xl tracking-widest font-semibold text-white uppercase lg:text-3xl">Contact us</h1>*/}

                {/*    </div>*/}
                {/*</div>*/}
                <svg className={'absolute -bottom-0.5 md:-bottom-1 z-20'} id="wave" style={{transform: 'rotate(0deg)', transition: "0.3s"}} viewBox="0 0 1440 110"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg">
                    <path style={{transform: "translate(0, 0px)", opacity: "1"}} fill={"#fff"}
                          d="M0,84L80,91C160,98,320,112,480,100.3C640,89,800,51,960,32.7C1120,14,1280,14,1440,23.3C1600,33,1760,51,1920,65.3C2080,79,2240,89,2400,91C2560,93,2720,89,2880,91C3040,93,3200,103,3360,93.3C3520,84,3680,56,3840,58.3C4000,61,4160,93,4320,95.7C4480,98,4640,70,4800,63C4960,56,5120,70,5280,72.3C5440,75,5600,65,5760,51.3C5920,37,6080,19,6240,14C6400,9,6560,19,6720,37.3C6880,56,7040,84,7200,86.3C7360,89,7520,65,7680,51.3C7840,37,8000,33,8160,39.7C8320,47,8480,65,8640,63C8800,61,8960,37,9120,28C9280,19,9440,23,9600,37.3C9760,51,9920,75,10080,86.3C10240,98,10400,98,10560,84C10720,70,10880,42,11040,28C11200,14,11360,14,11440,14L11520,14L11520,140L11440,140C11360,140,11200,140,11040,140C10880,140,10720,140,10560,140C10400,140,10240,140,10080,140C9920,140,9760,140,9600,140C9440,140,9280,140,9120,140C8960,140,8800,140,8640,140C8480,140,8320,140,8160,140C8000,140,7840,140,7680,140C7520,140,7360,140,7200,140C7040,140,6880,140,6720,140C6560,140,6400,140,6240,140C6080,140,5920,140,5760,140C5600,140,5440,140,5280,140C5120,140,4960,140,4800,140C4640,140,4480,140,4320,140C4160,140,4000,140,3840,140C3680,140,3520,140,3360,140C3200,140,3040,140,2880,140C2720,140,2560,140,2400,140C2240,140,2080,140,1920,140C1760,140,1600,140,1440,140C1280,140,1120,140,960,140C800,140,640,140,480,140C320,140,160,140,80,140L0,140Z"/>
                </svg>

            </div>
            <div className={'text-center p-8 justify-center'}>
                <p className={'text-emerald-600  tablet:text-3xl text-2xl italic '}>Reach Out To Us</p>
                <p className={'text-emerald-600  tablet:text-3xl text-xs italic'}>Feel free to reach out us. We always respond within 48 hours.</p>
            </div>
            <div className={'sm:w-8/12 w-full mx-auto mt-10'} >
                <div className={'w-full md:flex'}>
                    <div className={'md:w-1/2 w-full md:mr-4  mr-0 md:mx-0 '}>
                        <input
                            type="text" name="firstName" placeholder={'FIRST NAME'}
                            // onChange={event => {
                            //     setText({...text, firstName: event.target.value})
                            // }}
                            // value={text.firstName}
                            className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className={'md:w-1/2 w-full md:ml-4 ml-0 md:mx-0 mx-4'}>
                        <input
                            type="text" name="lastName" placeholder={'LAST NAME'}
                            // onChange={event => {
                            //     setText({...text, lastName: event.target.value})
                            // }}
                            // value={text.lastName}
                            className="w-full text-sm mb-4 text-gray-400 placeholder-gray-400 placeholder pl-8 rounded-md border border-gray-300 global-color focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>
                <div className={'w-full md:flex '}>
                    <div className={'md:w-1/2 w-full md:mr-4 mr-0 md:mx-0 '}>
                        <input
                            type="text" name="" placeholder={'COMPANY NAME'}
                            // onChange={event => {
                            //     setText({...text, companyName: event.target.value})
                            // }}
                            // value={text.companyName}
                            className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className={'md:w-1/2 w-full md:ml-4 ml-0 md:mx-0 mx-4'}>
                        <input
                            type="text" name="subject" placeholder={'SUBJECT'}
                            // onChange={event => {
                            //     setText({...text, subject: event.target.value})
                            // }}
                            // value={text.subject}
                            className="w-full text-sm mb-4 text-gray-400 placeholder-gray-400 placeholder pl-8 rounded-md border border-gray-300 global-color focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>
                <div className={'w-full md:flex '}>
                    <div className={'md:w-1/2 w-full md:mr-4 mr-0 md:mx-0'}>
                        <input
                            type="text" name="phone" placeholder={'PHONE NUMBER'}
                            // onChange={event => {
                            //     setText({...text, phoneNumber: event.target.value})
                            // }}
                            // value={text.phoneNumber}
                            className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className={'md:w-1/2 w-full md:ml-4 ml-0 md:mx-0'}>
                        <input
                            type="email" name="email" placeholder={'E-MAIL ADDRESS'}
                            // onChange={event => {
                            //     setText({...text, email: event.target.value})
                            // }}
                            // value={text.email}
                            className="w-full text-sm mb-4 text-gray-400 placeholder-gray-400 placeholder pl-8 rounded-md border border-gray-300 global-color focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>
                <div className={'w-full md:flex md:mx-0 mx-4'}>
                    <div className={'md:w-1/2 w-full md:mr-4 mr-0 md:mx-0'}>
                    <textarea
                        type="text" name="phone" placeholder={'ADDRESS'}
                        // onChange={event => {
                        //     setText({...text, address: event.target.value})
                        // }}
                        // value={text.address}
                        className="w-full text-sm placeholder-gray-400   pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-gray-100 text-gray-400 pb-16 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className={'md:w-1/2 w-full md:ml-4 ml-0 md:mx-0'}>
                    <textarea
                        type="text" name="message" placeholder={'MESSAGE'}
                        // onChange={event => {
                        //     setText({...text, message: event.target.value})
                        // }}
                        // value={text.message}
                        className="w-full text-sm placeholder-gray-400   pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-gray-100 text-gray-400 pb-16 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>

                </div>
                <div className={'pt-4 justify-end flex'}>
                    <button
                        // onClick={sendMessage}
                        className="w-32 rounded-3xl align-center items-center flex justify-center  text-white  bg-emerald-600 py-4   text-sm">
                        Send
                    </button>
                </div>

            </div>
        </div>

    );
};

export default Contact;