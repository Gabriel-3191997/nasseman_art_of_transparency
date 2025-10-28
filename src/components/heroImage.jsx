import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import DemoCarousel from './carousel';


class HeroImage extends React.Component {
    render() {
        return ( 
            <div className="flex flex-wrap gap-0 md:gap-0 justify-center bg-white mx-auto mt-32 md:mt-52">

                <div className="w-xl bg-black h-96">
                    <DemoCarousel />
                </div>
                <div className="w-xl bg-red-900 md:h-96 h-auto">
                    <h1 className="text-white mx-12 md:mx-20 text-5xl font-thin md:text-4xl font-sans capitalize md:pt-14 pt-10">
                        empowering youth against <span className="font-semibold">corruption</span> & <span className="font-semibold">injustice</span>
                    </h1>
                    <p className="font-sans font-thin text-lg text-white md:mx-20 py-5 mx-12">
                        Nasseman Art For Transparency (NAFT) is a Non-Governmental Organization (NGO) founded by Mr. Rabbie Nassrallah, popularly known as NASSEMAN, a Global Music Anti-Corruption Ambassador for Transparency International and FairPlay Music.
                    </p>
                    <div className="flex justify-start mb-10 mx-12 md:mx-20">
                        <button className="border border-white px-8 py-2 rounded xl text-white font-sans capitalize hover:underline cursor-pointer">
                            join us
                        </button>
                    </div>
                </div>
            </div>

        );
    }
}

export default HeroImage;