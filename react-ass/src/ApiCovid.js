import axios from "axios";
import React, { useEffect, useState } from "react";

const UseCovidData = () => {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://data.covid19india.org/v4/min/data.min.json");
        setCovidData(response.data);
      } catch (err) {
        console.error("error fetching data:", err);
      }
    };
    fetchData();
    console.log("State data", covidData);
  }, []);

 return (
    
    <div className="container">
      <h2>------------ Covid-19 Data State Wise -------------</h2>
      <table class="table">
      <thead>
          <tr>
            <th scope="col">State</th>
            <th scope="col">Total Confirmed</th>
            <th scope="col">Total Deceased</th>
            <th scope="col">Total Recovered</th>
            <th scope="col">Total Tested</th>
            <th scope="col">Total Vacinated-1</th>
            <th scope="col">Total Vacinated-2</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(covidData).map(([state, covidData]) => (
            <tr key={state}>
              <td>{state}</td>
              <td>{covidData.total.confirmed}</td>
              <td>{covidData.total.deceased}</td>
              <td>{covidData.total.recovered}</td>
              <td>{covidData.total.tested}</td>
              <td>{covidData.total.vaccinated1}</td>
              <td>{covidData.total.vaccinated2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UseCovidData;
