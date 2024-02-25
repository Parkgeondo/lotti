import React from 'react';
import style from './leftSection.module.css';

import Lottie from "lottie-react";
import animationData from "../Animation.json";

function LeftSection() {
    return (
      <div className={style.LeftSection}>
        <div className={style.Size}> 
          <Lottie animationData={animationData}></Lottie>
        </div>
      </div>
    );
  }
  
  export default LeftSection;