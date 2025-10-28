import React from 'react';
import img1 from '../assets/images/WhatsApp Image 2025-10-14 at 9.24.47 AM (1).jpeg';
import img2 from '../assets/images/WhatsApp Image 2025-10-14 at 9.24.48 AM.jpeg';
import img3 from '../assets/images/WhatsApp Image 2025-10-14 at 9.24.47 AM.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends React.Component {
    render() {
        return (
            <Carousel showThumbs={false} showStatus={false} showArrows={false}>
                <div className="h-96">
                    <img
                        src={img1}
                        alt="Hero Image"
                        className="w-full h-full cursor-pointer hover:opacity-50 object-cover"
                    />
                </div>
                <div className="h-96">
                    <img
                        src={img2}
                        alt="Hero Image"
                        className="w-full h-full cursor-pointer hover:opacity-50 object-cover"
                    />
                </div>
                <div className="h-96">
                    <img
                        src={img3}
                        alt="Hero Image"
                        className="w-full h-full cursor-pointer hover:opacity-50 object-cover"
                    />
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;