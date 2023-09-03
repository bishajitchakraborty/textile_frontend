import React from 'react';
import img from "../../assets/image/contact.jpg";
const Contact = () => {
    return (
        <div>
            <div className="w-full bg-center bg-cover h-96 md:h-128  relative"
                 style={{backgroundImage: `url(${img})`}}>
                <div
                    className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1
                            className="mobile:text-6xl text-3xl tracking-widest font-semibold text-white uppercase lg:text-3xl">Contact us</h1>

                    </div>
                </div>
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