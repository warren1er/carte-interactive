
/* Function qui va chercher l'image et son texte alternatif */
function Image(params){
  this.url = params.url;
  this.altText = params.altText;
  this.isImage = params.isImage;
}

/*Function qui va chercher le le contenu du texte qui sera mis dans le slider pour creer une notice */
function textContent(params){
 this.contentTitre = params.contentTitre;
 this.contentPara = params.contentPara;
 this.isImage = params.isImage;
}


function Slider(params){
  this.dataTab = params.dataTab;
  this.dataContainer = document.getElementById('container') || null;

  this.compteur= 0 ;

  this.addElt = function(url, text){
    this.dataTab.push(new Image(url));
    this.dataTab.push(new textContent(text));
  }

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
