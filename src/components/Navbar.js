import React from 'react'
import './Navbar.css'
import lock  from "./images/lock.png";
import twitter from './images/twitter-icon.png';
import facebook from './images/facebook-img.png';
import youtube from "./images/youtube-icon.png";
import pinterest from "./images/Pinterest-icon.png";
import logo from "./images/logo_brush_bazaar.png";
import cart from "./images/cart.jpg";
import profile from "./images/profile_icon.jpg";
import menu from "./images/menu_bar.jpg";



class Navbar extends React.Component {
    render() { 
        return (
          <>
          {/*Header -- one within black strip on the top head */}
           {/*Header -- one within black strip on the top head */}
           <nav style={{
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '5px',
      backgroundColor: '#2c3e50',
      color: 'white'
    }}>
       {/*logos -  */}
      <div style={{display: 'flex', gap: '8px'}}>
        <a href="*"><img src={twitter} alt="Twitter" height={25} width={25} /></a>
        <a href="*"><img src={facebook} alt="Facebook" height={25} width={25} /></a>
        <a href="*"><img src={youtube} alt="YouTube" height={25} width={25}/></a>
        <a href="*"><img src={pinterest} alt="Pinterest" height={25} width={25}/></a>
      </div>

      {/*Button ----register */}
      <div style={{marginRight:'250px'}}>
        <button style={{
          marginRight: '1px',
          marginLeft: '40px',
          padding: '1px 1px',
          backgroundColor: 'grey',
          color: 'white',
          border: 'none',
          borderRadius: '0px'
        }}>REGISTER</button>

        {/*button---- login*/}
        <button style={{
          padding: '1px 1px',
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          borderRadius: '0px'
        }}> <a href="*"><img src={lock}  alt="." width={20}  height={20}/></a>LOGIN</button>
      </div>
    </nav>

    <nav className="navbar">
      <img src={logo} alt="BRUSH BAZAAR" style={{ height: 100, width: 300 }}/>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/page">Page</a></li>
      </ul>
      <button className="buy-now-button">BUY NOW</button>
      <div >
      <a  href="*"><img src={cart} alt="cart" /></a>
      <a href="*"><img src= {profile} alt="profile" /></a>
      <a href="*"><img src={menu} alt="menu bar" /></a>
      </div>
      {/* Add social media icons here */}
    </nav>    
      </>
    )
      
    }
}
 
export default Navbar;