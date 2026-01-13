import React from 'react';

class Section extends React.Component{

  render(){

    return(

      <>
      <div className="flex flex-wrap justify-center bg-white h-auto border-t border-red-900 b-20 border-b mx-5 md:mx-50">
        <h1 className="text-red-900 font-sans capitalize text-3xl md:text-4xl font-semibold pt-8 pb-8 text-center text-balance w-2xl mx-5">
          empowering youth against corruption and injustice
        </h1>
      </div>
    <div className="flex flex-wrap justify-center gap-5 md:gap-5 h-auto bg-white pt-10 mx-2 md:pt-30">
        <div className="w-80 rounded-sm h-94 bg-red-900">
          <div className="mt-40">
            <h1 className="mx-5 text-white font-semibold font-sans text-2xl capitalize text-left">our vision</h1>
            <p className="text-white font-sans font-normal mx-5 text-sm">
              Our vision is to ensure every child is educated about the dangers and effects of corruption and injustice.
            </p>
            <div className="pt-5">
              <a href="#" className="font-sans font-semibold capitalize text-lg text-white rounded-sm hover:bg-white hover:text-red-900 hover:underline ring-white ring py-3 px-5 mx-5">read more</a>
            </div>
          </div>
        </div>
        <div className="w-80 rounded-sm h-94 bg-red-900">
          <div className="mt-40">
            <h1 className="mx-5 text-white font-semibold font-sans text-2xl capitalize text-left">our mission</h1>
              <p className="text-white font-sans font-normal mx-5 text-sm">
                Eros imperdiet, quibusdam! Sit aenean. Quas justo nobis illum natus magni accumsan volutpat nullam facere, nisi nostra. Parturient, perspiciatis blanditiis consequat curae asperiores voluptate.
              </p>
            <div className="pt-5">
              <a href="#" className="font-sans font-semibold capitalize text-lg text-white rounded-sm hover:bg-white hover:text-red-900 hover:underline ring-white ring py-3 px-5 mx-5">read more</a>
            </div>
          </div>
        </div>
      </div>
      </>

    );
  }
}

export default Section;
