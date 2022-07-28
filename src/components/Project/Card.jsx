import React from 'react';
import LikeCounter from './LikeCounter';

function Card(props) {
    
    return ( 
        <div className="card">
            <div className="card-img">
                <img src={require(`../../images/${props.src}`)} alt="area" />
            </div>
            <div className="card-info">
                <div className="card-location">
                    <img src={require("../../images/pin.png")} alt="pin" />
                    <p className="card-country">{props.country}</p>
                    <a href={props.mapLink} target={"_blank"} className="card-maps">View on Google Maps</a>
                </div>
                <div className="card-details">
                    <div className="location-n-time">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-time-frame">{props.timeFrame}</p>
                    </div>
                    <LikeCounter/>
                </div>
                <p className="card-summary">{props.summary}</p>
            </div>
        </div>
     );
}

export default Card;