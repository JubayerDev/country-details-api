const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();


const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country)
    // }
    const div = document.getElementById('countries');
    countries.forEach(country => {
        const div2 = document.createElement('div');
        div2.classList.add('country');
        div2.innerHTML = `<h4 class="text-primary">${country.name.common}</h4>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')" class="btn btn-primary">Details</button>`
        div.appendChild(div2)
        // console.log(country.coatOfArms.png)
    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}


const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.classList.add('country-div');
    countryDiv.innerHTML = `
        <h5 class="ms-3 text-info">Name: ${country.name.common}</h5>
        <p class="ms-3 text-info">Capital: ${country.capital}</p>
        <img width="200px" src="${country.coatOfArms.png}"/>
    `
}