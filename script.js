function getPokemon() {
  var search = "";
  search = document.getElementById('txtSearch').value;
  $.getJSON( "http://pokeapi.co/api/v2/pokemon/"+search+"/", function( data ) {
    $(".name").text(capitalizeFirstLetter(data.name));
    var weight = data.weight / 10;
    $(".weight").text( weight + " kg");
    document.getElementById('pokepic').src = data.sprites.front_default;
document.getElementById('txtSearch').text = "test";

}
)};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
