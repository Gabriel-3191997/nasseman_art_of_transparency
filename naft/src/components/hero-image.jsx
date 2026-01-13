import React from 'react';
import img from '../images/image.jpeg';
class HeroSection extends React.Component{

  render(){

    return(
      <>
      <div className="h-auto pt-50  bg-white md:bg-white ">
        <div className="flex flex-wrap justify-center">
          <h1 className="text-4xl md:text-4xl text-red-900 font-semibold text-center capitalize text-balance">nasseman art of <br/> transparency</h1>
          </div>
          <div className="flex flex-wrap justify-center">
            <p className="p-8 text-center w-md md:w-2xl  font-sans font-normal">
              Nasseman Art For Transparency (NAFT) is a Non-Governmental Organization (NGO) founded by Mr. Rabbie Nassrallah, popularly known as NASSEMAN, a Global Music Anti- Corruption Ambassador for Transparency International and FairPlay Music. Nasseman Art For Transparency is on a mission to empower young people to raise their voices against corruption and injustice through various artistic mediums such as education, music, art, drama,
and films.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <a href="#" className="mx-6 cursor-pointer mb-10 bg-red-900 py-3 px-8 capitalize text-white text-center hover:underline rounded-sm">read more</a>
            <a href="#" className="mx-6 cursor-pointer mb-10 bg-white py-3 px-8 capitalize text-red-900 ring ring-red-900 md:ring rounded-sm hover:bg-red-900 hover:text-white md:hover:text-red-900 md:hover:bg-white hover:cursor-pointer text-center text-lg">discover</a>
            </div>

        </div>
        <div className="flex flex-wrap justify-center mt-10 mx-2 pb-20">
          <img
            src={img}
            alt="Hero"
            className="rounded-lg md:rounded-lg w-auto h-auto md:min-h-50 md:w-1/2 md:object-cover hover:scale-110 hover:cursor-pointer"
          />
        </div>

      </>
    );
  }
}

export default HeroSection;
