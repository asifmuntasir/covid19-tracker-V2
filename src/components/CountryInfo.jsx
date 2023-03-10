import React, { useState } from 'react';
import CountryList from './CountryList';

const CountryInfo = () => {

    const [country, setCountry] = useState([]);

    const handleClick = (selectCountry) => {
        setCountry(selectCountry);
    }

    return (
        <div className="container-md mt-3">
            <CountryList />
        </div>
    );
}

export default CountryInfo;