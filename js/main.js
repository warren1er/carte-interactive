$(document).ready(function(){
  var monSlider = new Slider({
    dataTab: [
      new Image({
        url: "img/navigation.jpg",
        altText: "Image de google",
        isImage: true
      }),
      new textContent({
        contentTitre: "Bienvenue",
        contentPara: "Ceci est un texte test",
        isImage: false
      }),
      new Image({
        url: "img/pointer.png",
        altText: "Image de pointer",
        isImage: true
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

/* deplacement du slider avec les fleches */
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
