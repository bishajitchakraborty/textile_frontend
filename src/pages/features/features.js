import React from 'react';
import about from "../../assets/image/about_us.png";
const Features = () => {
    return (
        <div>
            <section className="text-emerald-600 body-font">
                <div className="  py-24 mx-auto flex flex-wrap">
                    <div className="sm:w-1/2 w-full mb-10 sm:mb-0 rounded-tablet overflow-hidden">
                        <img alt="feature" className="md:object-cover object-contain object-center md:min-h-full h-60 w-full"
                               src={about}/>
                    </div>
                    <div
                        className="flex flex-col flex-wrap md:py-6 -mb-10 md:w-1/2 md:pl-12 md:text-left text-center">
                        <h2 className={'pb-8 text-xl italic'}> About Us</h2>
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
                                    blade for rotogravure & flexo printing machine and also capable to supply various types’ products on
                                    demand.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;