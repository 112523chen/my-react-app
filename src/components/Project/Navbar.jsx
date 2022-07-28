import React from 'react'

function Navbar() {
    return ( 
        <div className="navbar">
            <nav>
                <img src={require("../../images/globe.png")} alt="globe" />
                <h3>Travel App</h3>
            </nav>
        </div>
     );
}

export default Navbar;