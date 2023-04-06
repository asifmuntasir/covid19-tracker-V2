import React from 'react';
import {
    MapContainer,
    TileLayer
} from 'react-leaflet';


const center = {
    lat: 42.3265,
    lng: -122.8756
}



const LeafletMap = () => {
    return (
        <div className='container-fluid h-100 w-100'>

            <MapContainer
                style={{ height: '100%' }} center={center} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </MapContainer>

        </div>
    );
}

export default LeafletMap;
