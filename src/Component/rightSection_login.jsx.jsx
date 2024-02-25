import React from 'react';
import style from './rightSection.module.css';
import Login from '../Img/loginPage.svg';

function RightSection() {
    return (
      <div className={style.RightSection}>
        <img src={Login} alt="" />
      </div>
    );
  }
  
  export default RightSection;