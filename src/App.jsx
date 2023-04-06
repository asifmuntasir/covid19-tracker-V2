import React from "react";
import CountryInfo from "./components/CountryInfo";
import Header from "./components/Header";
import TotalCaseComponent from "./components/TotalCaseComponent";
import LeafletMap from "./components/LeafletMap";

function App() {


  return (
    <div className="container-fluid m-0 p-0">
      <div className="container-fluid app-bg m-0 p-0">
        <Header />
        <TotalCaseComponent />
        <CountryInfo />
      </div>
      <div className="container-lg">
        <LeafletMap />
      </div>
    </div>
  )
}

export default App
