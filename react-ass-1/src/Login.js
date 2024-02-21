import React, { useState } from "react";

const Form=()=>{

    const initialState={name:'',phone:'',email:'',pincode:'',address:'',state:'',city:''};

    const [FormData,setFormData]=useState({...initialState});

    const [states] = useState(['Andhra Pradesh','Assam','Gujarat','Haryana','Kerala','Maharashtra','Punjab','None']);
    

    const cityData ={
        AndhraPradesh : ['adilabad' , 'adoni' , 'Visakhapatnam'],
        Assam : ['abhayapuri' , 'Guwahati' , 'Nagaon'],
        Gujarat : ['ahmedabad' , 'adalaj' , 'Surat'],
        Haryana : ['Guruhram' , 'Panipat' , 'Bhiwani'],
        Kerala : ['Thiruvananthapuram' , 'Kochi' , 'Malappuram'],
        Maharashtra : ['Pune' , 'Mumbai' , 'Nagpur'],
        Punjab : ['Amritsar' , 'Patiala' , 'Firozpur'],
        None : ['none']
    };
    
    const [submitted,setSubmitted] = useState(false);

    const updateCities=(state)=>{
        const cities = cityData[state]||[];
        setFormData((prevData)=>({...prevData,state,city:'',cities}));

    };

    const submitForm=(e)=>{
        e.preventDefault();
        setSubmitted(true);
        console.log('Form Data',FormData);
        setFormData({...initialState});
    };

    const handleInputChange=(e)=>{
        const{name,value}=e.target;
        setFormData((prevData)=>({...prevData,[name]:value}));
    };

    return(
        <div>
        <form className="container">
            <div className="header">
                <h1>-------Form-------</h1>
            </div>
            <div>
                <form onSubmit={submitForm}/>
            </div>
            <div>
                <input type="text" placeholder="Enter your name" name="name" value={FormData.name} onChange={handleInputChange} required></input>
            </div>

            <div>
                <input type="text" placeholder="Enter your contact no" name="mobile" pattern="[0-9]{10}" value={FormData.mobile} onChange={handleInputChange} required></input>
            </div>

            <div>
                <input type="text" placeholder="Enter your Email ID" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" value={FormData.email} onChange={handleInputChange}></input>
            </div>

            <div>
                <input type="text" placeholder="Enter your Pincode" name="pincode" pattern="[0-9]{6}" value={FormData.pincode} onChange={handleInputChange}></input>
            </div>

            <div>
                <input type="text" placeholder="Enter your Address" name="address" value={FormData.address} onChange={handleInputChange}></input>
            </div>

            <div>
                <select name="state" onChange={(e)=>updateCities(e.target.value)} required>
                    <option value="" disabled selected>
                        Select State
                    </option>
                    {states.map((state)=>(
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
            </div>

            <div>
                <select name="city" value={FormData.city} onChange={handleInputChange} required>
                    <option value="" disabled selected>
                        Select City
                    </option>
                    {FormData.cities && FormData.cities.map((city)=>(
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
            </div>

            <div>
                <button type="submit" name="submit" id="submit">Submit</button>
            </div>

        </form>
        
        {submitted && (
        <div>
            <h2>Submitted Data:</h2>
            <p>Name:{FormData.name}</p>
            <p>Phone:{FormData.phone}</p>
            <p>Email:{FormData.email}</p>
            <p>Pincode:{FormData.pincode}</p>
            <p>Address:{FormData.address}</p>
            <p>State:{FormData.state}</p>
            <p>City:{FormData.city}</p>
        </div>
        )}
    </div>
    );
};

export default Form;