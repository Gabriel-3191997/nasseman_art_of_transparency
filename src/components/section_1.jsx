import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faGlobe } from '@fortawesome/free-solid-svg-icons';

class Section extends React.Component {
  render() {
    return (
      <div className="flex gap-0 md:gap-0 flex-wrap justify-center bg-white  md:mt-8">
        <div className="bg-red-800 w-xl h-96">
        
    <div className="mt-5 mb-5 flex justify-start mx-10 md:mx-0 md:justify-center">
        <FontAwesomeIcon icon={faGlobe} className="text-white text-7xl md:text-7xl" />
    
    </div>
    <h1 className="text-white text-left mx-10 md:mx-20 font-sans font-semibold text-4xl uppercase py-3">
        our mission
    </h1>
        <p className="py-5 text-left text-xl text-white font-thin font-sans mx-10 md:mx-20">
            We are committed to educating youth through Music, Sports, Art, Films, Drama, and Poems about the ills of injustice and corruption.
        </p>
        </div>
        <div className="bg-red-900 w-xl h-96">
          <div className="mt-8 flex justify-start mx-10 md:mx-0 md:justify-center">
        <FontAwesomeIcon icon={faEye} className="text-white text-7xl md:text-7xl" />
    
    </div>
    <h1 className="text-white text-left mx-10 md:mx-20 font-sans font-semibold text-4xl uppercase py-3">
        our vision
    </h1>
          <p className="py-8 text-left text-xl text-white font-thin font-sans mx-10 md:mx-20">
            We are committed to educating youth through Music, Sports, Art, Films, Drama, and Poems about the ills of injustice and corruption.
        </p>

        </div>
      </div>
    );
  }
}

export default Section;
