const nav= document.querrySelector('.main');
  function fixNav(){
    console.log(topOfNav);
const topOfNav= nav.offsetTop;


  }


  window.addEventListner('scroll',fixNav);
