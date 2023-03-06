var theRating = document.querySelectorAll(".ms");
var ratingArray=[];


var rating= document.querySelectorAll(".ms").length;
var ratingValue;
// var activeButton;



for (let i = 0; i < rating; i++) {
    document.querySelectorAll(".ms")[i].addEventListener("click", function(){
        ratingValue= this.textContent;
        buttonAnimation(ratingValue);
        
    })
}

for (let i = 0; i < rating; i++) {
    ratingArray.push(theRating[i].textContent)
    
}

// function secondDisplay() {
//     alert("Please make a selection")
// }


function display() {
    
    if (ratingArray.includes(ratingValue,0)){
        document.querySelector(".first").style.display="none";
        document.querySelector(".second").style.display="block";
        document.querySelector(".selection").textContent="You selected " + ratingValue + " out of 5";
    } else {
        // document.querySelector(".selection").textContent="You didn't make any selection";
        // document.querySelector(".btn").onclick= secondDisplay();
        alert("Please make a selection")
    };
    // console.log(ratingArray.includes(ratingValue,0))
    
}
var activeButton;
function buttonAnimation(currentButton) {

    activeButton = document.querySelector(".key" + currentButton);
    // activeButton.classList.add("animation");
    activeButton.style.backgroundColor= "hsl(217, 12%, 63%)";
  
    setTimeout(function() {
      activeButton.style.backgroundColor= "hsla(216, 12%, 54%, 0.158)";
    },4000);
  
  }

