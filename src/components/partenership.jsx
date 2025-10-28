import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload} from '@fortawesome/free-solid-svg-icons';

import '../App.css';

class Partenership extends React.Component {
    render(){

        return(

           <>
           <div id="partnership">
             <div className="bg-black bg-blend-overlay opacity-80 h-96 w-auto mt-60 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat object-cover inset-0 z-0">
            <h1 className="text-white text-4xl font-sans font-semibold mt-2 uppercase mx-5 md:w-xl text-center
            ">
                become a partner
against coruption
            </h1>
            <p className="text-center text-white py-5 w-auto mx-5 md:w-lg text-lg">
                Join us, support our Movement! and let’s help educate the next generation about the ripple effects of corruption and injustice in our society.
            </p>
        
                 <button className="bg-red-900 py-3 px-8 rounded-sm text-white capitalize text-2xl opacity-85 cursor-pointer">
        <FontAwesomeIcon  icon={faFileDownload} className="text-2xl"/> register
      </button>
            
            </div>
           </div>
           </>
        )
    }
}

export default Partenership;