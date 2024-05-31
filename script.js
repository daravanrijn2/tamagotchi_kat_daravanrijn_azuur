const drinkKnop = document.querySelector('#waterbakje')
const katKnop = document.querySelector('#kat')
const eetKnop = document.querySelector('#voerbakje')

let tekst = document.querySelector('h1')

const katGeluid = document.querySelector('#spinnendeKat')
const kittenGeuid = document.querySelector('#miauwenKittens')

let getalDrinken = 0
let getalAaien = 0
let getalEten = 0

let scoreDrinken = document.querySelector('#getalDrinken')
let scoreEten = document.querySelector('#getalEten')
let scoreAaien = document.querySelector('#getalAaien')

let drinkenBar = document.querySelector('#drinkenBar')
let aaienBar = document.querySelector('#aaienBar')
let etenBar = document.querySelector('#etenBar')

drinkenBar.value = 0 
aaienBar.value = 0
etenBar.value = 0

function katDrinken(){
    if(getalDrinken < 10){
        getalDrinken = getalDrinken + 1
        scoreDrinken.textContent = getalDrinken
        drinkenBar.value = drinkenBar.value + 1 
    } 
    controleerBars()
}

drinkKnop.addEventListener('click', katDrinken)

setInterval(minDrinkenBar, 1900)

function minDrinkenBar(){
    if(getalDrinken !== 0 || drinkenBar.value !== 0){
    getalDrinken = getalDrinken - 1
    drinkenBar.value = drinkenBar.value - 1
    scoreDrinken.textContent = drinkenBar.value
    }
}

function katAaien(){
    if(getalAaien < 10){
        getalAaien = getalAaien + 1
        scoreAaien.textContent = getalAaien
        aaienBar.value = aaienBar.value + 1
    } 
    controleerBars()
}

katKnop.addEventListener('click',katAaien)

setInterval(minAaienBar, 1900)

function minAaienBar(){
    if(getalAaien > 0 || aaienBar.value > 0){
    getalAaien = getalAaien -1
    aaienBar.value = aaienBar.value - 1
    scoreAaien.textContent = aaienBar.value
    }
}

function katEten(){
    if(getalEten < 10){
        getalEten = getalEten + 1
        scoreEten.textContent = getalEten
        etenBar.value = etenBar.value + 1
    } 
    controleerBars()
}    

eetKnop.addEventListener('click', katEten)

setInterval(minEtenBar, 1900)

function minEtenBar(){
    if(getalEten !== 0 || etenBar.value !== 0){
    getalEten = getalEten - 1
    etenBar.value = etenBar.value - 1
    scoreEten.textContent = etenBar.value
    }
}

function speelGeluid(){
    katGeluid.play()
}

katKnop.addEventListener('click', speelGeluid)

function speelGeluidTwee(){
    kittenGeuid.play()
}

function controleerBars(){
    if(getalDrinken === 10 && getalAaien === 10 && getalEten === 10){
        katKnop.src = './images/kittens.png'
        speelGeluidTwee()
        tekst.textContent = 'Congratulations!'
        drinkenBar.style.visibility = 'hidden'
        aaienBar.style.visibility = 'hidden'
        etenBar.style.visibility = 'hidden'

        scoreDrinken.style.visibility = 'hidden'
        scoreAaien.style.visibility = 'hidden'
        scoreEten.style.visibility = 'hidden'
    }
}




