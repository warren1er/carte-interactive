/*
$(function(){

    var $prev,$next, $diapo, $diapoIndex = 1;
    $prev = $('#prev');
    $next = $('#next');

    $diapo= $('.diapo');

    function precedent(){
      $prev.on("click",function(){
        console.log('precedent');
      });
    }

    function suivant(){
      $next.on("click",function(){
        var j = 1;
        console.log('suivant');
      });
    }

    function affichage(x){
      var i;
      if( x > $diapo.length){
        $diapoIndex = 1;
      }
      else if (x < 1) {
        $diapoIndex = $diapo.length;
      }
    }
precedent();
suivant();
})
*/
function Image(params){
  this.url = params.url;
  this.altText = params.altText;
}

function textContent(params){
  this.content = params.text;
}

function Slider(params){
  this.dataTab = params.dataTab;
  this.dataContainer = document.getElementById('container') || null;

  this.addElt = function(url){
    this.dataTab.push(new Image(url));
  }

  this.affSlider = function(){
    if (this.dataContainer === null) {
      $('.diaporama').append("<div id='container'> </div>");
    }
    else {
      this.dataContainer.innerHTML = '<img src="'+this.dataTab[0].url + '"alt="'+ this.dataTab[0].altText+ '"/>';
    }

  }

}

$(document).ready(function(){
  var monSlider = new Slider({
    dataTab: [new Image({url: "img/navigation.jpg", altText: "Image de google"})]
  });
  monSlider.affSlider();
});
