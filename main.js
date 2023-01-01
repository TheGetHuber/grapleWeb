let toolbar = document.body

window.onload = function(){
    toolbar = document.querySelector(".toolbar")
    document.body.style.background = "linear-gradient("+ Math.sin(window.scrollY * 100) +"deg, #a02a7c, #30b4b4)"
}

document.addEventListener("scroll", function(){
    document.body.style.background = "linear-gradient("+ Math.sin(window.scrollY * 100) +"deg, #a02a7c, #30b4b4)"
})