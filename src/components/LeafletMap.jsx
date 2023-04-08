import React from 'react';
import {
    MapContainer,
    TileLayer
} from 'react-leaflet';


const center = {
    lat: 42.3265,
    lng: -122.8756
}

// style={{ height: '100%' }}

const LeafletMap = () => {
    return (
        <div className='map'>

            <MapContainer
                style={{ height: '100%' }}
                center={center} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </MapContainer>

        </div>
    );
}

export default LeafletMap;
