import { React, useState, useEffect } from 'react';
import {
    MapContainer,
    TileLayer
} from 'react-leaflet';
import InfoMarker from './InfoMarker';
import axios from 'axios';


const center = {
    lat: 42.3265,
    lng: -122.8756
}

// style={{ height: '100%' }}

const LeafletMap = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await axios.get('https://disease.sh/v3/covid-19/countries');
            // console.log(response.data);
            setCountries(response.data);
        }

        getData();
    }, []);


    const markers = countries.map(cn => {
        if (cn) {
            return <InfoMarker
                key={cn.country}
                lat={cn.countryInfo.lat}
                long={cn.countryInfo.long}
                title={cn.country}
            />
        }
        return null;
    });


    return (
        <div className='map'>

            <MapContainer
                style={{ height: '100%' }}
                center={center} zoom={7} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {markers}

            </MapContainer>

        </div>
    );
}

export default LeafletMap;
