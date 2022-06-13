import { Link } from 'react-router-dom';
// import React from 'react';
const Navbar = () => {
    return ( 
    <nav className="navbar">
        <h1>BLOG-MANIA</h1>
        <div className="links">
            <Link to='/'>HOME</Link>
            <Link to='/create'  style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>NEW BLOG</Link>
        </div>
    </nav>
    );
}
 
export default Navbar;

//sfc  shortcut for creating stateless components boiler plate
