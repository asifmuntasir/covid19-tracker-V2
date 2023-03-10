import React from "react";
import CountryInfo from "./components/CountryInfo";
import Header from "./components/Header";
import TotalCaseComponent from "./components/TotalCaseComponent";

function App() {


  return (
    <div className="container-fluid app-bg m-0 p-0">
      <Header />
      <TotalCaseComponent />
      <CountryInfo />
    </div>
  )
}

export default App
