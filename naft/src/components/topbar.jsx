import React from 'react';
import img from '../images/logo.jpeg';
import SocialmediaIcons from '../components/socialmedia-icons';

class TopNav extends React.Component {
  render() {
    return (
      <div className="flex items-center justify-between bg-white h-auto px-4 py-2">
        {/* Logo */}
        <img
          src={img}
          alt="Logo"
          className="h-28 md:h-28 mx-2 md:mx-8 object-contain"
        />

        {/* Social Media Icons */}
        <div className="w-auto">
          <SocialmediaIcons />
        </div>
      </div>
    );
  }
}

export default TopNav;
