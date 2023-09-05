import React from 'react';
import dress_details from '../../../assets/image/Ladies-Blouse.jpg';
const ProductDetails = () => {
    return (
        <div>
            <div className={'bg-white py-16 tablet:px-10 md:px-0'}>
                <div className={'md:w-8/12 mx-auto w-full flex flex-wrap bg-gray-50 my-10'}>
                    <div className={'md:w-1/2 w-full p-10'}>
                        <img src={dress_details}/>
                    </div>
                    <div className={'md:w-1/2 w-full px-2 py-8'}>
                        <div className={'py-4 px-8 border-l border-gray-200'}>
                            <h2 className={'text-black text-xl font-semibold pb-2 tracking-wide'}>Ladies Dress-WWD0002</h2>
                            <div className={'mt-4 product-des'}>
                                <p>
                                    Ladies short sleeve dress. Garments manufactured by Posh Garments in Bangladesh.
                                </p>
                            </div>
                            <div className={'grid grid-cols-2 text-sm mt-8 gap-5'}>
                                    <div className="text-sm text-gray-900 capitalize tracking-wide">PRODUCT CODE:WWD000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;