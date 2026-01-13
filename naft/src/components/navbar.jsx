import React from 'react';

class NavBar extends React.Component{

  render(){

    return(

      <>
      <div className="bg-red-900 h-12 mx-0">
        <ul className="flex py-2 flex-wrap justify-center md:justify-end gap-5 text-white capitalize text-lg mx-8">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">job &amp;
career</a>
          </li>
          <li>
            <a className="uppercase" href="#">faq</a>
          </li>
        </ul>
      </div>
      </>
    );
  }
}

export default NavBar;
