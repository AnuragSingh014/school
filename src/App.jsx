// App.js
import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Featured from './component/Featured';
import Clients from './component/Clients';
import Awards from './component/Awards';
import Review from './component/Review';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className=' bg-[#EFE9D7]'>
      <Hero />
      <Featured />
      <Clients />
      <Awards />
      <Review />
      <Footer />
    </div>
  );
};

export default App;
