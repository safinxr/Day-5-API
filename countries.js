const loadCountries =() =>{
    fetch('https://restcountries.com/v2/all')
    .then(response =>response.json())
    .then(data => display(data))
}
loadCountries();
const display=data=>{
    const div = document.getElementById("countries");
    data.forEach(country =>{
        const div2= document.createElement("div");
        div2.innerHTML =`
        <h3 class="in">Name: ${country.name}</h3>
        <p class="in">Capital: ${country.capital}
        <br><br>
        <button onclick="loadcountry('${country.name}')">Details</button>
        `;
        div2.classList.add("div2");
        div.appendChild(div2);
    })
}

const loadcountry= names =>{
    const details =`https://restcountries.com/v3.1/name/${names}`
    fetch(details)
    .then(response =>response.json())
    .then(countryDetails =>countryF(countryDetails[0]))
}

const countryF = x =>{
    console.log(x);
    const div = document.getElementById("counrtyD");
    div.innerHTML=`
    <h4>Name: ${x.name.common}</h4>
    <p>Popopulation: ${x.population}</p>
    <p>region: ${x.region}</p>
    <img src="${x.flags.png}">
    `

}