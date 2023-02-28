import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const imageLink = {
    'world': 'https://img.freepik.com/premium-vector/coronavirus-covid-19-map-confirmed-cases-report-worldwide-globally-coronavirus-disease-2019-situation-update-worldwide-maps-show-where-coronavirus-has-spread-illustration_7280-3282.jpg?w=2000',
    'totalCases': 'https://gray-weau-prod.cdn.arcpublishing.com/resizer/lGQJt38P52vIDaXX9QYwnsgzaoY=/800x400/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gray/EEIQIUHENJBORPXIREWNVQ3UFU.jpg',
    'totalDeaths': 'https://www.thehastingscenter.org/wp-content/uploads/shutterstock_2024293802Covid-death-data-866x563.jpg',
    'todayCases': ' https://news.gsu.edu/files/2022/06/early-omicron-variant.jpg',
    'recovery': ' https://www.who.int/images/default-source/wpro/health-topic/covid-19/hbr.jpg?sfvrsn=57f4fb23_7',
    'todayDeaths': 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/2021-04-21T121716Z_2131371579_.jpg?VersionId=Uh66Z.ZrMne6q.75BzygSZLHkxqtqg4B&size=690:388',
}




const TotalCaseComponent = () => {

    const [info, setInfo] = useState({})

    useEffect(() => {
        async function getData() {
            const response = await axios.get('https://disease.sh/v3/covid-19/all');
            // console.log(response.data);
            setInfo(response.data);
        }

        getData();
    }, [])


    return (
        <div className="container fluid py-3">
            <div className="container-md">
                <div className="row row-cols-3">
                    <div className="col">
                        <Card
                            img={imageLink.world}
                            title={'Total Update'}
                            data={info.updated}
                        />
                    </div>
                    <div className="col">
                        <Card
                            img={imageLink.totalCases}
                            title={'Total Cases'}
                            data={info.cases}
                        />
                    </div>
                    <div className="col">
                        <Card
                            img={imageLink.totalDeaths}
                            title={'Total Deaths'}
                            data={info.deaths}
                        />
                    </div>
                    <div className="col">
                        <Card
                            img={imageLink.todayCases}
                            title={'Today Cases'}
                            data={info.todayCases}
                        />
                    </div>
                    <div className="col">
                        <Card
                            img={imageLink.recovery}
                            title={'Today Recovery'}
                            data={info.todayRecovered}
                        />
                    </div>
                    <div className="col">
                        <Card
                            img={imageLink.todayDeaths}
                            title={'Today Deaths'}
                            data={info.todayDeaths}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalCaseComponent;
