import React from 'react';
import about_img from "../../assets/image/about.webp";
import wave from "../../assets/image/wave.svg"
import Features from "../features/features";
import {BarChartOutlined, GlobalOutlined, TeamOutlined, SafetyOutlined,HeartOutlined} from "@ant-design/icons";
import '../../assets/css/style.css';
const valueList = [
    {
        id: 1,
        title: 'Integrity',
        icon: <SafetyOutlined />,
    },
    {
        title: 'Growth',
        icon: <BarChartOutlined/>,
    }
    ,
    {
        id: 3,
        title: 'People',
        icon: <TeamOutlined/>,
    }

    ,
    {
        id: 4,
        title: 'Connection',
        icon: <GlobalOutlined />,
    },  {
        title: 'Passion',
        icon: <HeartOutlined />,
    }


]

const About = () => {
    return (
        <div>
            <section className="w-full bg-center h-72 bg-cover about_image relative"
                      style={{backgroundImage: `url(${about_img})`}}>
                <div
                    className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold  text-white uppercase lg:text-3xl">About <span
                            className="text-primary underline">xyz Garments</span></h1>

                    </div>
                </div>
                <div className={'absolute w-full h-max -bottom-0.5 md:-bottom-1'}>
                    <img src={wave} alt=""/>
                </div>
            </section>
            <div>
                <div className={"md:mt-20 w-11/12 mx-auto"}>
                    <Features/>
                </div>
            </div>
            {/*<div className={'md:w-5/6 mx-auto w-full'}>*/}
            {/*    <section className={'w-full flex flex-wrap  mt-20'}>*/}
            {/*        <div className={'w-full md:w-1/2'}>*/}
            {/*            /!*<img src="static/image/vission1.jpg" alt=""/>*!/*/}
            {/*            /!*<img src={website.data[0].visionImage} alt=""/>*!/*/}
            {/*            <p className="leading-relaxed p-8 text-emerald-600 text-sm italic">*/}
            {/*                Our Vision To become the leading supplier to our customers by delivering socially, ethically and sustainable*/}
            {/*                manufactured quality products with on time delivery using a highly efficient, Eco-friendly and vertically integrated manufacturing process..*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <div*/}
            {/*            className={' w-full md:w-1/2 text-center flex flex-col justify-center items-center  text-emerald-600'}>*/}
            {/*            <span className="material-icons text-6xl lg:text-8xl"> visibility</span>*/}
            {/*            <span className={'text-2xl lg:text-4xl flex justify-center items-center'}>*/}
            {/*                <span className={'w-10 lg:w-2 h-1 bg-emerald-600 mr-3'}/>*/}
            {/*                     Our Vision*/}
            {/*                <span className={'w-10 lg:w-2 h-1 bg-emerald-600 ml-3'}/>*/}
            {/*        </span>*/}
            {/*        </div>*/}
            {/*    </section>*/}

            {/*</div>*/}
            {/*<div className={'md:w-5/6 mx-auto w-full'}>*/}
            {/*    <section className={'w-full flex flex-wrap  mt-20'}>*/}
            {/*        <div*/}
            {/*            className={' w-full md:w-1/2 text-center flex flex-col justify-center items-center  text-emerald-600'}>*/}
            {/*            <span className="material-icons text-6xl lg:text-8xl"> track_changes</span>*/}
            {/*            <span className={'text-2xl lg:text-4xl flex justify-center items-center'}>*/}
            {/*                <span className={'w-10 lg:w-2 h-1 bg-emerald-600 mr-3'}/>*/}
            {/*                       Our Mission*/}
            {/*                <span className={'w-10 lg:w-2 h-1 bg-emerald-600 ml-3'}/>*/}
            {/*           </span>*/}
            {/*        </div>*/}
            {/*        <div className={'w-full md:w-1/2'}>*/}
            {/*            /!*<img src="static/image/vission1.jpg" alt=""/>*!/*/}
            {/*            /!*<img src={website.data[0].visionImage} alt=""/>*!/*/}
            {/*            <p className="leading-relaxed p-8 text-emerald-600 text-sm italic">*/}
            {/*                Our mission is very clear - provide best effort and services for our customers.*/}

            {/*                To satisfy and retain customers through employee involvement, teamwork, personal excellence,*/}
            {/*                and integrating scientific approaches in our quest to become the leading manufacturer of apparel products.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </section>*/}
            {/*</div>*/}
                <section>
                    <div className="text-emerald-600 body-font">
                        <div className="w-11/12 md:3/4 px-5 py-12 text-primary mx-auto">
                            <div className="flex flex-col text-center text-primary w-full mb-20">
                                <span className="material-icons text-8xl">visibility</span>
                                <span className={'text-2xl md:text-4xl flex justify-center items-center'}>
                                    <span className={'w-10 md:w-40 h-1 bg-emerald-600 mr-3'}/>
                                       Our Core Values
                                    <span className={'w-10 md:w-40 h-1 bg-emerald-600 ml-3'}/>
                                </span>
                            </div>
                            <div
                                className="flex flex-wrap w-full lg:w-3/4 mx-auto -m-4 justify-center text-center">

                                {
                                     valueList.map((v,i)=>(
                                            <div key={i} className="p-2 md:w-1/3 xl:w-1/5 sm:w-1/2 w-full">
                                                <div className="border-2 border-emerald-600 px-4 py-6 rounded-lg">
                                                    <span className="material-icons">{v.icon}</span>
                                                    <p className="leading-relaxed">{v.title}</p>
                                                </div>
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            <section>
                <div className="text-emerald-600 body-font">
                    <div className="w-11/12 md:3/4 px-5 py-12 text-primary mx-auto">
                        <div className="flex flex-col text-center text-primary w-full mb-20">
                            <span className="material-icons text-8xl">work_history</span>
                            <span className={'text-2xl md:text-4xl flex justify-center items-center'}>
                                    <span className={'w-10 md:w-40 h-1 bg-emerald-600 mr-3'}/>
                                       What We Do
                                    <span className={'w-10 md:w-40 h-1 bg-emerald-600 ml-3'}/>
                                </span>
                        </div>
                        <div
                            className="flex flex-wrap w-full lg:w-3/4 mx-auto -m-4 justify-center text-center">

                            {
                                [1,1,1,1,1,1,1,1,1].map((v,i)=>(
                                    <div key={i} className="p-2 md:w-1/3 w-full">
                                        <div className="border-2 shadow-lg px-4 py-6 rounded-lg">
                                            <span className="material-icons text-5xl">domain</span>
                                            <p className="leading-relaxed text-2xl">Process & Quality</p>
                                            <p className="leading-relaxed">
                                                A strict regime of internal audits, critical process check,
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>


            </div>
    );
};

export default About;