// Scrolovací menu

//Odkazy
let home = document.querySelector(".home-scroll")
let odkazGame = document.querySelector(".game-scroll")
let odkazPlayers = document.querySelector(".players-scroll")
let odkazStudio = document.querySelector(".studio-scroll")
// console.log(odkazGame, odkazPlayers, odkazStudio)


//targety
let scrollHome = document.querySelector(".section1").offsetTop
let scrollGame = document.querySelector(".game").offsetTop
let scrollPlayers = document.querySelector(".players").offsetTop
let scrollStudio = document.querySelector(".studio").offsetTop
// console.log(scrollGame, scrollPlayers, scrollStudio)


//scroll home
home.addEventListener("click", function(){
    window.scrollTo({
        top:scrollHome,
        behavior: "smooth"
    })
})




















odkazStudio.addEventListener("click", function(){
    window.scrollTo({
        top: scrollStudio -70,
        behavior: "smooth"
    })
})























//first scroll to game
odkazGame.addEventListener("click", function(){
    window.scrollTo({
        top: scrollGame -70,
        behavior: "smooth"
    })
})

//second scroll to Players

odkazPlayers.addEventListener("click", function(){
    window.scrollTo({
        top: scrollPlayers -70,
        behavior: "smooth"
    })

})





