import React from 'react';
// import patientImg from '/im'

const Header = () => {
    return (
        <>
            <div className="container-md my-3 bg-body shadow-lg rounded">
                <nav className="navbar bg-none">
                    <ul className="container-md me-auto m-2">
                        <li className='nav-item fs-2 fw-bold text-success'>
                            <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/patient-2451785-2035922.png?f=avif&w=256"
                                alt="Patient"
                                width={52}
                                height={52}
                            /> Covid 19 Case Tracker
                            {/* <img src="/images/disease-prevention.png"
                                alt="Patient"
                                width={32}
                                height={32}
                            /> Covid 19 Case Tracker */}
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;
