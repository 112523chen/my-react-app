import React from 'react';
import Card from './Card';
import data from '../../data.json'
const locations = data.locations

function Main() {

    const locationList = locations.map((location) => 
        <div key={location.location_id}>
            <Card key={location.location_id} src={location.src} country={location.country} mapLink={location.mapLink} title={location.title}timeFrame={location.timeFrame} summary={location.summary}/>
            <hr />
        </div>        
    )

    return ( 
        <div className="main">
            {/* <Card id={0} src="../images/mount_fuji.png" country="Japan" mapLink={null} title="Mount Fuji" timeFrame="12 Jan, 2021 - 24 Jan, 2021" summary="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."/> */}
            {locationList}
        </div>
     );
}

export default Main;