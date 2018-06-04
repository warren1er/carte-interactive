
/* Function qui va chercher l'image et son texte alternatif */
function Image(params){
  this.url = params.url;
  this.altText = params.altText;
}

/*Function qui va chercher le le contenu du texte qui sera mis sur l'image pour creer une notice */
function textContent(params){
  this.content = params.text;
}


function Slider(params){
  this.dataTab = params.dataTab;
  this.dataContainer = document.getElementById('container') || null;

  this.compteur= 0 ;

  this.addElt = function(url){
    this.dataTab.push(new Image(url));
  }

  this.affSlider = function(){

    if (this.dataContainer === null) {
      $('.diaporama').append("<div id='container'> </div>");
    }
    else {
      this.dataContainer.innerHTML = '<img src="'+this.dataTab[this.compteur].url + '"alt="'+ this.dataTab[this.compteur].altText+ '"/>';
    }

  }

  this.suiv = function(){
    if (this.compteur === (this.dataTab.length-1)) {
      this.compteur = 0;
    }
    else {
      ++this.compteur;
    }
    this.affSlider();
  }

  this.precedent = function(){
    if (this.compteur === 0) {
      this.compteur = this.dataTab.length-1;
    }
    else {
      --this.compteur;
    }
    this.affSlider();
  }
}


/****************************************************/


$(document).ready(function(){
  var monSlider = new Slider({
    dataTab: [
      new Image({
        url: "img/navigation.jpg",
        altText: "Image de google"
      }),
      new Image({
        url: "img/pointer.png",
        altText: "Image de pointer"
      })
      ]
  });

  monSlider.affSlider();
  var nextBouton = document.getElementById('next');
  nextBouton.addEventListener('click',function(){
    monSlider.suiv();
  });

  var precBouton = document.getElementById('prev');
  precBouton.addEventListener('click',function(){
    monSlider.precedent();
  });

  document.onkeydown = function(e){
    switch (e.key) {
      case 'ArrowLeft':
          monSlider.precedent();
        break;
      case 'ArrowRight':
          monSlider.suiv();
        break;
      default:
        console.log("erreur de code");
    }
  };

});
