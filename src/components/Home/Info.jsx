import React from 'react'

class Info extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className='info'>
                <img id='headshot' src={require("../../images/Alex_Chen_Headshot.jpeg")} alt="headshot" />
                <div className="details">
                    <h1 id='name'>Alex Chen</h1>
                    <h2 id='title'>Data Science Student</h2>
                </div>
                <div className="buttons">
                    <div className="button" id='left-side' >
                        <a id='email' href={"mailto:112623chen@gmail.com"}>
                            <svg width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path  d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"/></svg>
                            Email
                        </a>
                    </div>
                    <div className="button" id='right-side'>
                        <a id='portfolio' href={"https://112523chen.github.io"}>
                            <svg width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path  d="M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"/><path fill="currentColor" d="M384 128v64h256v-64H384zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z"/></svg>
                            Portfolio
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Info;