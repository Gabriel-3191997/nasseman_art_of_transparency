import React from 'react'
import TopNav from './components/topbar'
import NavBar from './components/navbar'
import Advertise from './components/advertise'
import HeroSection from './components/hero-image'
import Section from './components/section'
import './App.css'


class App extends React.Component {
  render() {
    return(
      <>
    <div className="fixed w-full">
        <NavBar/>
          <Advertise/>
      {/*<TopNav/>*/}
    </div>
      <HeroSection/>
      <Section/>
      </>
    );
  }
}



export default App;
