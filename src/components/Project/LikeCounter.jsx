import React from 'react'

function LikeCounter() {

    let value = Math.round(Math.random()*10)
    let [likeValue, setLikeValue] = React.useState(value);

    let c = "";
    let [className, setClassName] = React.useState(c); 

    let likeState = false;
    let [likeStateValue, setLikeStateValue] = React.useState(likeState);

    const handleNumberChange = () =>{
        if(className === ""){
            setLikeValue(likeValue + 1)
            setClassName("state");
            setLikeStateValue(true);
        } else if(className === "state"){
            setLikeValue(likeValue - 1);
            setClassName("");
            setLikeStateValue(false);
        }
    }

    let likeOn = <svg id='like' className={className} onClick={handleNumberChange} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"/></svg>
    let likeOff = <svg id='like' className={className} onClick={handleNumberChange} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"/></svg>
    let likeStateIcon = likeStateValue ? likeOn : likeOff;



    return ( 
        <div className="likes-counter">
            <div className="like">
                <div className='likeButton'>
                    {likeStateIcon}
                </div>
                {(likeValue === 0 ? <p className='likeValue' style={{width: '9.602px', height: "22.5px"}}></p>  :<p className='likeValue'>{likeValue}</p>)}
            </div>
        </div>
     );
}

// TODO:
// create fix size for like value

export default LikeCounter;