import React from 'react'
import { Link } from 'react-router-dom'
import '../css/main.css'

function Herosection() {
  return (
    <>
    <div className="container">
    <div className="container-left">
      <h1 className="title">
        Welcome <span className="title-s">who</span> you are,
      </h1>
      <p className="text">
      Donec at metus eu nunc lobortis vehicula in ac dui. Nam ac orci eleifend, placerat nisi vitae, porta augue. 
      Maecenas dignissim elit tempor lectus tempor, et maximus velit eleifend. Sed magna risus, malesuada quis tortor quis,
      </p>
      <div className="input-container">
        
        <Link href="#" to={"/users"}><button className="btn" >Get Users</button></Link>
      </div>
    </div>

    <div className="container-right"></div>
  </div>
    </>
  )
}

export default Herosection