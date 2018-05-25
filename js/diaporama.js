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
}

function textContent(params){
  this.content = params.text;
}

function Slider(params){
  this.dataTab = params.dataTab;
  this.container = params.container || 'diaporama';
  this.dataContainer = document.getElementsByClassName(this.container);

  this.addElt : function(){

  }

  this.affSlider : function(){

  }
}
