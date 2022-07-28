import React from 'react';
import Info from './Info'
import About from './About'
import Project from './Project'
import Foot from './Foot'

const Home = () => {
    return (
        <div>
            <Info />
            <About/>
            <Project/>
            <Foot/>
        </div>
    )
}

export default Home;