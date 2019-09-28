document.getElementById("de").addEventListener("click", getInfo);

function getInfo() {
    
  let url = 'http://restcountries.eu/rest/v1/alpha?codes=de';
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        var germany = data;
        console.log(data);
        var germanyhtml = germany.map(function(germany) { return '<p>' + germany.name + '<br>' + germany.population + '<br>' + germany.area + '<br>' + germany.borders + '</p>'; })
        document.getElementById("de").style.fill = 'hsl(0, 97%, 49%)';
        document.getElementById("root").innerHTML = germanyhtml;
    });
}
