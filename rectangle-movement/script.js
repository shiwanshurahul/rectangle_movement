var rec = document.querySelector("#rect");

window.addEventListener("mousemove", function(dets){
    //console.log(dets.clientX);  //x-coordinate of mouse when moved over rect
    //gsap, mapRange

    var xval = gsap.utils.mapRange(0,window.innerWidth,100+rec.getBoundingClientRect().width/2, window.innerWidth-(100+rec.getBoundingClientRect().width/2),dets.clientX)
    gsap.to(rec, {
        left: xval + "px",
        ease: Power3,
    });

}); //end of addEventListener

//mouse on end of left screen(0 px))-> rect kuch piche -> lets take it 100px 
//mouse on right end screen(window.innerWidth) -> take it 100 px 
//window.innerWidth -> returns the width of a window's content area.