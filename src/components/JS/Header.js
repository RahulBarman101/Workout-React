import React from 'react'
import '../Css/Header.css'

function Header() {
    return (
      <div className="header">
        <ul className="header__links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#work">Workouts</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    );
}

export default Header
