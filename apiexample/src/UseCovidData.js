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
    <div>
      <h2>cfvfv</h2>
      <table>
        <thead>
          <tr>
            <th> State</th>
            <th>Total Confirmed</th>
            <th>Total Deceased</th>
            <th>Total Recovered</th>
            <th>Total Tested</th>
            <th>Total Vacinated-1</th>
            <th>Total Vacinated-2</th>
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
