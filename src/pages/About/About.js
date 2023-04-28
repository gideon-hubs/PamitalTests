import Header from "../../components/Header";
import './About.css'

import React from 'react'

function About() {
  return (
    <>
    <>
    <div className="heading">
    <h1>About Us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>

    <section className="about-us">
    <img 
    src="https://images.unsplash.com/photo-1682613375621-c10d167c852e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
    />
    <div className="contents">
    <h2>Lorem Ipsum</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <button className="read-more-btn">Read More</button>
    </div>
    </section>
    </>
    </>
  )
}

export default About