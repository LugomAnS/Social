import React from "react";
import s from './Header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <img
        src="https://i.pinimg.com/736x/6e/8e/74/6e8e740911f5fc1887f152425624ef37.jpg"
        alt="logo"
      />
    </header>
  );
}

export default Header;
