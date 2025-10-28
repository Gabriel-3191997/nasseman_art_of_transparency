import React from "react";
import img from '../assets/images/WhatsApp Image 2025-10-13 at 8.14.08 PM.jpeg'

class Sec extends React.Component {
    render() {
        return (
            <>
                <div className="flex flex-wrap md:justify-evenly justify-center items-center bg-white h-96 gap-0">
                    <div className="flex-col justify-center max-w-xl h-96 bg-white">

                    <div className="mt-8 md:mt-8 md:mx-5 mx-5">
                       <p className="text-left font-sans font-normal normal-case text-lg">
                         Nasseman Art For Transparency (NAFT) is a Non-Governmental Organization (NGO) founded by Mr. Rabbie Nassrallah, popularly known as NASSEMAN, a Global Music Anti- Corruption Ambassador for Transparency International and FairPlay Music.
                       </p>
</div>      
                     </div>
                    <div className="w-80 h-96 bg-green-500 md:mt-5 mt-3">
                        <img src={img} alt="Nasseman" className="w-full bg-cover h-full" />
                    </div>
                </div>
            </>
        );
    }
}

export default Sec;
