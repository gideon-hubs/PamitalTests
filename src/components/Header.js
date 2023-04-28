import React from 'react'
import '../css/main.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
  
  <header>
  <nav className="nav">
    <div className="logo-container">
      <img src="src/menu.png" className="menu-btn" id="menu-btn" />
    </div>
    <ul className="list-items">
      <li className="list">
        <Link href="#" to={"/"}><button className="btn" >Home</button></Link>
      </li>
      <li className="list">
        <Link href="#" to={"/about"}><button className="btn" >About</button></Link>
      </li>
      <li className="list">
        <Link href="#" to={"/contact"}><button className="btn" >Contact</button></Link>
      </li>
      <div className="btn-container">
        <li className="list"></li>
        <li className="list"></li>
      </div>
    </ul>
  </nav>
</header>

  )
}
