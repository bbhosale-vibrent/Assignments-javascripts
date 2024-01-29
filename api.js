fetch("https://data.covid19india.org/v4/min/data.min.json").then((data)=>data.json())
.then((objectData)=>{
    // console.log(ObjectData.AN.delta.tested);
    console.log(objectData);
    let tableData="";
    Object.entries(objectData).forEach(([state,values])=>{
        tableData += ` 
        <tr>
        <td>${state}</td>
        <td>${values.total.confirmed}</td>
        <td>${values.total.deceased}</td>
        <td>${values.total.recovered}</td>
        <td>${values.total.tested}</td>
        <td>${values.total.vaccinated1}</td>
        <td>${values.total.vaccinated2}</td>
         </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
}).catch((error)=>console.error("Error fetching data:",error));
