var text = '';
function SearchCountry() {
    text = document.getElementById('country-search').value;
    connectCountry(text)
}

function connectCountry(text) {
    fetch(`https://api.covid19api.com/dayone/country/${text}`)
        .then(res => res.json())
        .then(data => loadCountry(data));
}



function loadCountry(data) {
    console.table(data[0]);
    var container = document.getElementById("firstdiv");


    var newContainer = document.getElementById("seconddiv");

    newContainer.innerHTML = ``;
    container.innerHTML = `<p><b>Country Name: ${data[0].Country} </b></p>
                           <p><b><Confirmed Cases: ${data[0].Confirmed}</b></p>
                           <p><b>No. of Active Cases: ${data[0].Active}</b></p>
                           <p><b>No. of Deaths: ${data[0].Deaths}</b></p>
                           <button onclick="moreDetails()">More Details</button>`;
    

}

function moreDetails() {
    fetch(`https://restcountries.com/v3.1/name/${text}`)
        .then(res => res.json())
        .then(data => loadDetails(data));
}

function loadDetails(data) {
    var newContainer = document.getElementById("seconddiv");

    newContainer.innerHTML = `  <br> <br ><img src=${data[0].flags.png}> 
                                <p class="bbb"><br><b> Population :  ${data[0].population}</b></p>
                                <p>Capital :  ${data[0].capital[0]}</p>
                                <p>Region :  ${data[0].region} </p>
                                <p>Flag :  ${data[0].flag.jpg} </p>`;

}