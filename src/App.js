import React, { useEffect, useState } from 'react';
import './App.css';
import { Loader } from './Copmonents/Loader/Loader';
// import { SidebarImages } from './Api/Api';
import { Main } from './Copmonents/Main/Main';
// import { cardData } from './Database/Database'

function App() {
  // const [sliders, setSliders] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   const initSlider = async () => {
  //     const slider = await SidebarImages();
  //     setSliders(slider);
  //   };

  //   initSlider();
  //   setIsLoading(false)
  // }, [])

  return (
    <div className="App">
      {/* {isLoading ?
        <Loader />
        :
        <Main sliders={sliders}/>
      } */}

<Main />
    </div>
  );
}

export default App;