
/* Function qui va chercher l'image et son texte alternatif */
/******* code problematique **************/

function Picture(source){
  this.url = source.url;
  this.altText = source.altText;
  this.isImage = source.isImage;
}

/*Function qui va chercher le le contenu du texte qui sera mis dans le slider pour creer une notice */
function textContent(source){
 this.contentTitre = source.contentTitre;
 this.contentPara = source.contentPara;
 this.isImage = source.isImage;
}


function Slider(source){
  this.dataTab = source.dataTab;
  this.dataContainer = document.getElementById('container') || null;

  this.compteur= 0 ;


  this.affSlider = function(){

    if (this.dataContainer === null) {
      $('.diaporama').append("<div id='container'> </div>");
    }
    else {
      if (this.dataTab[this.compteur].isImage) {
          this.dataContainer.innerHTML = '<img src="'+this.dataTab[this.compteur].url + '"alt="'+ this.dataTab[this.compteur].altText+ '"/>';
      }
      else {
          this.dataContainer.innerHTML = '<div class="text-center">'+'<h1>'+ this.dataTab[this.compteur].contentTitre+'</h1>' + '<p>'+this.dataTab[this.compteur].contentPara +'</p>'+'</div>';
      }

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
