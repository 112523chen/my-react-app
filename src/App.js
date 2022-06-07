import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

class App extends React.Component {
    render(){
        return(
            <div className='display'>
                <h1>Welcome to My Future Page</h1>
                <p>For now please excuse my new website at it's current state</p>
                <p>Click this the button below for my other website</p>
                <button><a href='https://112523chen.github.io'>Cick Here</a></button>
            </div>
        );
    };
};

ReactDOM.render(<App />,document.getElementById('app'));

export default App;