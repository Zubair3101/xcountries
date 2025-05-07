import React, { useEffect, useState } from "react";
import Cardformat from "./Cardformat";
import "./Countries.css";

function Countries() {
  let [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    async function getCountriesData() {
      try {
        let rawData = await fetch(
          "https://xcountries-backend.azurewebsites.net/all"
        );
        let finalData = await rawData.json();
        setCountriesData(finalData);
      } catch (error) {
        console.erorr(`Error fetching data: ${error.message}`);
      }
    }

    getCountriesData();
  }, []);

  return (
    <div className="country-sec">
      {countriesData.map((country) => (
        <Cardformat name={country.name} flag={country.flag} />
      ))}
    </div>
  );
}

export default Countries;
