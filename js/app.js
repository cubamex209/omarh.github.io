var sanity = "its running"
console.log(sanity); // Sanity Check

$(document).ready(function () {






    document.getElementsByClassName('project').addEventListner("scroll", fadeIN)
    function transition(){
      document.getElementsByClassName('img').innerHTML = images();

  }
