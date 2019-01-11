const rezultatElement = document.getElementById("rezultat")

const url = 'https:/baza-filmova.herokuapp.com/filmovi/'

fetch (url)
    .then (response => response.json())
    .then (data => {
        console.log(data);
    
    let sablon =``    
    for (var i=0; i<data.length; i++) {
        sablon += `
        <div class="rez">
        <h3>${data[i].naziv}</h3>
        <h4>${data[i].godina}</h4>
        <img src= "${data[i].slika}" width=240px>
        </div>

        `
        rezultat.innerHTML = sablon


    }
    })