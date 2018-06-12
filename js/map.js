function carte(params){
    this.cibleHtml = document.getElementById('map') || null;
    this.zoom = params.zoom || 10;
    this.tabPoint = params.tabPoint || Array();

    this.center = {lat: 45.764043, lng: 4.835659};

    this.affCarte = function(){
      var map = new google.maps.Map(this.cibleHtml,{
      center: this.center,
      zoom: this.zoom
    });
    }
}

/*
var map;
function initMap() {
  var lyon = {lat: 45.764043, lng: 4.835659};

  map = new google.maps.Map(document.getElementById('map'), {
  center: lyon,
  zoom: 12
  });

  var marker = new google.maps.Marker({
    position: lyon,
    map:map
  });


}
*/
/*******************************************************************/
/******************  recuperation des donnees JCDecaux     ****************/
/*$(document).ready(function(){
  $.ajax({
      url : 'https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=bbe84f096138206b749ce0bff4ce49e697f87e35',
      type : 'GET',
      dataType : 'JSON',
      success : function(code_html, statut){
          console.log('request bien partie');

      },

      error : function(resultat, statut, erreur){
        console.log("erreur");
      },

      complete : function(data){
        console.log('ok');
        for (var i = 0; i < data.responseJSON.length; i++) {
          console.log(data.responseJSON[i].position.lat);
        }


      }

   });
});
*/

// fonction de recuperation
/*function recupVeloPos (){
  var url = 'https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=bbe84f096138206b749ce0bff4ce49e697f87e35';
  var veloLyon = new XMLHttpRequest();
    veloLyon.onload = function(){
      var data = JSON.parse(this.responseText);
      for (var i = 0; i < data.length; i++) {
        var markVelo = data[i];
      }
      console.log(markVelo);
      console.log('retour: ', data);

    };
    veloLyon.onerror = function (data) {
      console.log('Erreur ...');
    };
    veloLyon.open('GET',url,true);
    veloLyon.send(null);
}
*/
