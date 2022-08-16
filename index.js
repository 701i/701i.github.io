//scroll hacia arriba
    function scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    }
    history.scrollRestoration = "manual";
    window.onload = scrollToBottom;

//agregar boton pantalla completa
var text = document.querySelector('.text')
function scrolListener(e){
  var screenTop = document.scrollingElement.scrollTop;
  var screenBottom = screenTop + innerHeight;
  var textTop = text.getBoundingClientRect().top
  
  if ( textTop < screenBottom && textTop < screenTop)
  {
    text.children[0].classList.add("showtext");
    text.children[0].classList.remove("hidetext");
  }
  
}


document.onscroll = scrolListener