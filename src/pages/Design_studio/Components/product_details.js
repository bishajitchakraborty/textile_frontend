import React from 'react';
import dress_details from '../../../assets/image/t_shirt.png';
const ProductDetails = () => {
    return (
        <div>
            <div className={'bg-white py-4 tablet:px-10 md:px-0'}>
                <div className={'md:w-4/6 mx-auto  text-center text-xl text-emerald-600 pt-10 '}>
                    <h2
                        className={'w-full border border-emerald-600 py-5 tablet:text-3xl text-xl uppercase font-bold'}>Product Details</h2>
                </div>
                <div className={'md:w-4/6 mx-auto w-full flex flex-wrap  my-10'}>
                    <div className={'md:w-1/2 w-full p-10  border border-emerald-600'}>
                        <img className={'h-96 object-contain'} width={500} src={dress_details}/>
                    </div>
                    <div className={'md:w-1/2 w-full px-2 py-8'}>
                        <div className={'py-4 px-8'}>
                            <p className={'text-black text-sm'}>New Arrival</p>
                            <h2 className={'text-black text-xl font-semibold pb-2 tracking-wide'}>Ladies Dress-WWD0002</h2>
                            <div className={'mt-4 product-des text-gray-500'}>
                                <p className={'text-sm'}>
                                    Ladies short sleeve dress. Garments manufactured by Posh Garments in Bangladesh.Garments
                                    manufactured by Posh Garments in Bangladesh.
                                </p>
                            </div>
                            <div className={'grid grid-cols-2 text-sm mt-8 gap-5'}>
                                    <div className="text-sm text-gray-900 capitalize tracking-wide">Product Code : WWD000</div>
                                    <div className="text-sm text-gray-900 capitalize tracking-wide">Composition : Linen</div>
                            </div>
                            <div className={'grid grid-cols-2 text-sm mt-8 gap-5'}>
                                <div className="text-sm text-gray-900 capitalize tracking-wide">Availability : In Stock</div>
                                <div className="text-sm text-gray-900 capitalize tracking-wide">Color : Blue</div>
                            </div>
                            <div className={'grid grid-cols-2 text-sm mt-8 gap-5'}>
                                <div className="text-sm text-gray-900 capitalize tracking-wide">Price : $120</div>
                                <div className="text-sm text-gray-900 capitalize tracking-wide">Discount : <del>$10%</del></div>
                            </div>
                            <div className={'mt-4 product-des text-red-500'}>
                                <p className={'text-sm'}>
                                    Note: Product delivery duration may vary due to product availability in stock.
                                </p>
                            </div>
                            <div className={'mt-4 product-des text-red-500'}>
                                <p className={'text-sm'}>
                                    Disclaimer: The color of the physical product may slightly vary due to the deviation of lighting sources, photography or your device display settings.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;