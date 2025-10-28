import React from 'react';
import img1 from '../assets/images/514502651_18365812969196814_8888835078465199744_n (1).jpeg';
import img2 from '../assets/images/WhatsApp Image 2025-10-14 at 9.24.39 AM.jpeg';
import img3 from '../assets/images/WhatsApp Image 2025-10-14 at 9.24.45 AM (1).jpeg';

class News extends React.Component {
    render() {
        return (
            <>
            <div className="flex flex-col py-5 md:mt-16 mt-8">
                <div className="md:mx-20 mx-5">
                    <div className="border-b-4 border-b-red-900 md:w-56 w-auto">
                    <div className="max-w-28 bg-red-900 mx-0 md:mx-0">
                    <div className=" py-2 mx-2 text-white font-sans font-semibold text-2xl text-center uppercase">
                        news
                    </div>
                </div>
                </div>
                </div>
            </div>
        
             {/* Card 1 */}
                <div className="flex flex-wrap bg-white h-auto justify-center items-center gap-52 md:gap-8 mt-10 md:mt-5 md:mb-12">
                   
                    <div className="bg-black w-80 h-80">
                        <img src={img1} alt="" className="w-full h-full cursor-pointer hover:bg-blend-overlay hover:opacity-50 object-cover" />
                        <div className="bg-white h-40 shadow-xl border-b-2 border-gray-100">
                            <h1 className="text-left font-sans font-semibold text-xl mx-5 mt-3 capitalize cursor-pointer">
                                nasseman as orange compliance brand ambassador
                            </h1>
                            <button className="px-8 py-3 bg-red-900 hover:bg-red-800 normal-case text-md border-none hover:underline rounded-md text-white mt-3 mx-5 cursor-pointer text-lg  md:text-lg">
                                Read more
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-black w-80 h-80">
                        <img src={img2} alt="" className="cursor-pointer h-full w-full hover:bg-blend-overlay hover:opacity-50 object-cover" />
                        <div className="bg-white h-40 shadow-md shadow-gray-100 border-b-2 border-b-gray-200">
                            <h1 className="text-left font-sans font-semibold text-xl mx-0 mt-3 capitalize cursor-pointer hidden">
                                nasseman as orange compliance brand ambassador
                            </h1>
                            <button className="px-8 py-3 bg-red-900 hover:bg-red-800 normal-case text-md border-none hover:underline rounded-md text-white mt-5 hidden text-lg  md:text-lg">
                                Read more
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-black w-80 h-80">
                        <img src={img3} alt="" className="cursor-pointer h-full w-full hover:bg-blend-overlay hover:opacity-50 object-cover" />
                        <div className="bg-white h-40 shadow-xl border-b-2 border-gray-100">
                            <h1 className="text-left font-sans font-semibold text-xl mx-5 mt-3 capitalize cursor-pointer hidden">
                                nasseman as orange compliance brand ambassador
                            </h1>
                            <button className="px-8 py-3 bg-red-900 hover:bg-red-800 normal-case text-md border-none hover:underline rounded-md text-white mt-5 mx-5 hidden text-lg  md:text-lg">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default News;