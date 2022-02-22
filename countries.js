const loadCountries =() =>{
    fetch('https://restcountries.com/v2/all')
    .then(response =>response.json())
    .then(data => display(data))
}
loadCountries();
const display=data=>{
    const div = document.getElementById("countries");
    data.forEach(country =>{
        console.log(country);
        const h2 = document.createElement("h2");
        h2.innerText=`Name: ${country.name}
        Capital: ${country.capital}`;
        div.appendChild(h2);
    })
}