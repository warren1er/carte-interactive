function carte(params){
    this.cibleHtml = document.getElementById('map') || null;
    this.zoom = params.zoom || 10;
    this.tabPoint = params.tabPoint || Array();

    this.center = {lat: 45.764043, lng: 4.835659};

    this.affCarte = function(){
      var map = new google.maps.Map(this.cibleHtml,{
      center: this.center,
      zoom: this.zoom
    })


    this.affMarker = function(){
      $.ajax({
          url : 'https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=bbe84f096138206b749ce0bff4ce49e697f87e35',
          type : 'GET',
          dataType : 'JSON',
          success : function(code_html, statut){
              //console.log('request bien partie');

          },

          error : function(resultat, statut, erreur){
            console.log("erreur");
          },

          complete : function(data){
            for (var i = 0; i < data.responseJSON.length; i++) {
              var marker = new google.maps.Marker({
                position: data.responseJSON[i].position,
                map: map,
                click: function(){
                  $('#name-address').html(data.responseJSON[i].name);
                  $('#address').html(data.responseJSON[i].address);
                  $('#banking').html(data.responseJSON[i].banking);
                  $('#status').html(data.responseJSON[i].status);
                  $('#available_bikes').html(data.responseJSON[i].available_bikes);
                }
              });

              /*marker.addListener('click', function(){
                $('#name-address').html(data.responseJSON[i].name);
                $('#address').html(data.responseJSON[i].address);
                $('#banking').html(data.responseJSON[i].banking);
                $('#status').html(data.responseJSON[i].status);
                $('#available_bikes').html(data.responseJSON[i].available_bikes);

              });*/
            }
          }
       });
    }/* fin de affMarker */

  }/* fin affCarte */
}
