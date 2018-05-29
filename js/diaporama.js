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
    this.dataTab = new Image();
    this.dataTab.push();
    this.dataTab = new textContent();
    this.dataTab.push();
  }

  this.affSlider : function(){
    if (this.dataContainer.length === 0) {
      this.dataContainer = new addElt();
      this.dataContainer.innerHTML = this.container;
    }
    else {
      this.dataContainer.innerHTML = this.container;
    }
    this.dataContainer.innerHTML = new addElt;

  }
}

 
