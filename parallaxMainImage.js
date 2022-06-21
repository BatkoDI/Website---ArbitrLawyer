"use strict"

function parallax(event) {
    let main = document.getElementById("mainImage"); 
    let background = document.getElementById("backgroundImage");
    let speed = 1;
    
    main.style.transform = `translateX(${event.pageX * speed / 5}px)` + `translateY(${event.pageY * speed / 10}px)`;
    background.style.transform = `translateX(${event.pageX * speed / 5}px)`;
}

let parallaxImage = document.getElementById("mouseParallax");
parallaxImage.addEventListener("pointermove", parallax);