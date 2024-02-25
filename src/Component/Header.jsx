import React from 'react';
import style from './Header.module.css';
import Logo from '../Img/logoIcon.svg';


function Header() {
    return (
      <div className={style.Header}>
        <div className={style.Logo}>
            <img src={Logo} alt="" />
            <div className={style.Logo}>FUNDY</div>
        </div>
        <div className={style.Text}>
            <div>로그인</div>
            <div>회원가입</div>
        </div>
      </div>
    );
  }
  
  export default Header;