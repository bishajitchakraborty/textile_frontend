import React from 'react';
import img from "../../assets/image/contact.jpg";
import img_1 from "../../assets/image/img_1.png";
import {TableOutlined, GlobalOutlined, BarChartOutlined, InsuranceOutlined } from "@ant-design/icons";
import Features from "../features/features";

const serviceList = [
    {
        id: 1,
        title: 'Unique Features',
        description: "The most important principle that brought Biochemical to today is the quality.",
        icon: <TableOutlined />,
    },
    {
        title: 'order',
        description: "In Biochemical employs right persons having right qualifications in right positions.",
        icon: <BarChartOutlined/>,
    }
    ,
    {
        id: 3,
        title: 'Manufacturing',
        description: "We follow a sensitive and environmentally friendly process in the production processes.",
        icon: <InsuranceOutlined />,
    }

    ,
    {
        id: 4,
        title: 'Shipments',
        description: "In Biochemical, we operate in a world-class business that recognizes the importance.",
        icon: <GlobalOutlined />,
    }

]

const Home = () => {
    return (
        <div>
            <div className={'style.slider_area'}>
                <div className="w-full bg-center bg-cover h-96 md:h-128  relative"
                     style={{backgroundImage: `url(${img})`}}>

                </div>
            </div>
            <div className={'bg-white pt-8 pb-8'}>
                {/*<CardSlider slider={data[0]?.homeCardSlider}/>*/}
                <div className={'w-11/12 mt-20 mx-auto grid md:grid-cols-4 md:grid-cols-2 gap-10 '}>
                    {serviceList.map((value, i) => (
                        <div className="w-full flex items-center flex-col" key={i}>
                            <div
                                className={'flex justify-center items-center text-5xl h-24 w-24 text-emerald-600 rounded-full border-2 border-emerald-600'}>
                                {value.icon}
                            </div>
                            <h2 className={'text-2xl text-center  text-emerald-600 py-4 uppercase'}>{value.title}</h2>
                            <p className={'text-sm w-7/12 mx-auto text-emerald-600 text-center pb-4'}>
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className={"md:mt-20 w-11/12 mx-auto"}>
                    <Features/>
                </div>
                {/*{*/}
                {/*    data && data[0]?.channelPartner &&*/}
                {/*    <div className={'desktop:w-11/12 mx-auto w-full mb-20'}>*/}
                {/*        <h2 className={'text-center text-gray-400 uppercase pb-8'}>Authorized Channel Partner</h2>*/}
                {/*        <AuthorizedChannelPartner slider={data && data[0]?.channelPartner}/>*/}
                {/*    </div>*/}
                {/*}*/}
                <div className={'bg-blue-white py-20'}>
                    <h2 className={'text-center text-2xl italic text-emerald-600'}>Our Few Clients</h2>
                    <div className={'w-8/12 mx-auto mt-10 flex flex-wrap '}>
                        {
                            [1,1,1,1,1,1,1,1].map((v, i) => (
                                 <div href={v.link ? v.link : "#"} className={'md:w-1/4 w-full  mt-4'} key={i}>
                                    <div className={'mx-2'}>
                                        <div className={'shadow'} style={{background: "#f7f7f7"}}>
                                            <img src={img_1} height={10} width={200} alt={v.name ? v.name : "client logo"}
                                                   className={'h-36 p-2 object-contain scale-90 hover:scale-100 ease-in duration-100 w-full'}
                                            />

                                        </div>
                                    </div>
                                </div>
                            ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;