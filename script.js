
let cityData ={
    AndhraPradesh : ['adilabad' , 'adoni' , 'Visakhapatnam'],
    Assam : ['abhayapuri' , 'Guwahati' , 'Nagaon'],
    Gujarat : ['ahmedabad' , 'adalaj' , 'Surat'],
    Haryana : ['Guruhram' , 'Panipat' , 'Bhiwani'],
    Kerala : ['Thiruvananthapuram' , 'Kochi' , 'Malappuram'],
    Maharashtra : ['Pune' , 'Mumbai' , 'Nagpur'],
    Punjab : ['Amritsar' , 'Patiala' , 'Firozpur'],
    None : ['none']
}

function updateCities(state)
{
    let cityDropDown = document.getElementById('city');
    cityDropDown.innerHTML = '<option value="" disabled selected>Select City</option>';

    let cities = cityData[state] || [];
    cities.forEach(function(city){
        let option = document.createElement('option');
        option.value = city;
        option.text = city;
        cityDropDown.add(option);
    });
    

}

function submitForm()
{
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let pincode = document.getElementById('pincode').value;
    let address = document.getElementById('address').value;
    let state = document.getElementById('state').value;
    let city = document.getElementById('city').value;

    console.log("Name : " + name);
    console.log("Contact No : " + phone);
    console.log("Email ID : " + email);
    console.log("PinCode : " + pincode);
    console.log("Address : " + address);
    console.log("State : " + state);
    console.log("City : " + city);
    
    document.getElementById('output').innerHTML=
         'Name : ' + name + '<br>' +
         'Contact No : ' + phone + '<br>' +
         'Email ID : ' + email + '<br>' +
         'Pincode : ' + pincode + '<br>' +
         'Address : ' + address + '<br>' +
         'State : ' + state + '<br>' +
         'City : ' + city + '<br>';
}