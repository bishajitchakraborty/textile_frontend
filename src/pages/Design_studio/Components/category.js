import React from 'react';
import {Link} from "react-router-dom";
import category from '../../../assets/image/Ladies-Blouse.jpg';
const Category = () => {
    return (
        <div>
            <div className={'bg-white'}>
                <div className={'md:w-8/12 mx-auto px-4 text-center text-xl text-black pt-10 '}>
                    <h2
                        className={'w-full border py-5 tablet:text-3xl text-xl uppercase font-bold text-gray-500'}>Apparels</h2>
                </div>
                <div className={'md:w-8/12 full mx-auto  flex flex-wrap'}>
                    {
                        [1,1,1,1,1,1].map((v,i)=>(
                            <div className={'md:w-1/3 my-10 w-full '}>
                                <Link href={''}>
                                    <div className={'mx-4 bg-white h-124 mb-8'}>
                                        <img src={category} alt={"aa"} height={2} width={500}
                                             className={'h-124 object-cover hover:border-4 border-white w-full transition-all ease-linear duration-100'}/>
                                        <h2 className={'text-center bg-white text-xl  text-black py-4'}>Ladies-Blouse</h2>
                                    </div>
                                </Link>

                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Category;