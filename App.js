import Navigator from './navigations/index'
import Swiper from './scenes/swiper/swiper';
import { useState } from 'react';
export default function App() {
  const [showOnBoarding, setShowOnBoarding] = useState(true)
  return (
    <>
      {showOnBoarding ?
        <Swiper setShowOnBoarding={setShowOnBoarding} />
        :
        <Navigator />
      }
    </>
  );
} 