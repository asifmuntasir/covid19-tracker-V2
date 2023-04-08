import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';



const markerIcon = new L.icon({
    // iconUrl: require('./images/coronavirus.png'),
    iconUrl: 'coronavirus.png',
    iconSize: [25, 25]
});


const InfoMarker = ({ lat, long, title }) => {

    const center = {
        lat,
        long
    }

    return (
        <Marker
            position={center}
            icon={markerIcon}
        >
            <Popup>
                <h2>{title}</h2>
            </Popup>
        </Marker>
    );
}

export default InfoMarker;
