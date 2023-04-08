import { React, useState, useEffect } from 'react';
import axios from 'axios';

const CountryList = ({ handleClick }) => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function getCountries() {
            const response = await axios.get('https://disease.sh/v3/covid-19/countries');
            // console.log(response.data);
            setCountries(response.data);
        }

        getCountries();
    }, [])

    return (
        <div>
            <select className="form-select" aria-label="Default select example">
                <option selected>Select any country</option>
                {
                    countries.map(cn =>
                        (<option key={cn.country} onClick={() => handleClick(cn.country)}>{cn.country}</option>)
                    )
                }

            </select>
        </div>
    );
}

export default CountryList;