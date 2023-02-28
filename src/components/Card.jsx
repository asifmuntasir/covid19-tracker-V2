import React from 'react';

const Card = ({ img, title, data }) => {
    return (
        <div className="card mb-3" style={{ "maxWidth": "550px" }}>
            <div className="row g-0">
                <div className="col-md-5">
                    <img src={img} className="img-fluid h-100 rounded-start" alt="..." />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title fs-2">{title}</h5>
                        <p className="card-text fs-5 text-warning--dark">{data}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
