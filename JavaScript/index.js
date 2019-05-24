///////////////////active nav JS///////////////////
 var btnContainer = document.getElementById("btnDiv");
 var navBtns = btnContainer.getElementsByClassName("navBtn");

for (var i = 0; i < btns.length; i++) {
  navBtns[i].addEventListener("click", function() {
     var current = document.getElementsByClassName("active");
     current[0].className = current[0].className.replace(" active", "");
     this.className += " active";
    if (current.length >= 0) { 
       current[0].className = current[0].className.replace(" active", "");
     }
     this.className += " active";
   });
}
///////////////////active nav JS///////////////////



//////////////////SlideShow////////////////////////
//  JS on popular.html page, wont work on here for some reason?
//////////////////SlideShow////////////////////////