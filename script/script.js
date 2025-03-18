console.log("Hallo");

const pElement = document.querySelector('p') 
const vissenKom = document.querySelector('#vissenkom')
const vis = document.querySelector('#vis')
const eersteKnop = document.querySelector('#eersteknop')
const tweedeKnop = document.querySelector('#tweedeknop')
const derdeKnop = document.querySelector('#derdeknop')
let getal = 0
let aantalKom = ["eerste", "tweede", "derde", "vierde", "vijfde"]
let soortVis = ["blub", "dodeblub"]
let etenVis = ["een", "twee"]
let vriendjeVis = ["een", "twee"]


function veranderKom(aantal){
    textContent = "./img/" + aantalKom[aantal] + "kom.png"
    console.log(textContent)
    vissenKom.src = textContent
}
function veranderVis(soort){
    textContent = "./img/" + soortVis[soort] + ".png"
    console.log(textContent)
    vis.src = textContent
}
function veranderViseten(eten){
    textContent = "./img/etenblub" + etenVis[eten] + ".png"
    console.log(textContent)
    vis.src = textContent
}
function veranderVisvriendje(vriendje){
    textContent = "./img/vriendjeblub" + vriendjeVis[vriendje] + ".png"
    console.log(textContent)
    vis.src = textContent
}


function countSeconds() {
    if (getal<2){
        veranderKom(getal)
    }
    else if (getal<4){
        veranderKom(getal)
        pElement.textContent = "Pas op, verschoon het water!"
        console.log("tekst")
    }
    else if (getal<5){
        veranderKom(getal)
        pElement.textContent = "R.I.P!"
        veranderVis(1)
        console.log("tekst")
    }
    else {
        veranderKom(4)
    }
    getal += 1
    console.log(getal) 
}
setInterval(countSeconds, 8000) 


eersteKnop.addEventListener("click", function(){
    veranderKom(0)
    veranderVis(0)
    pElement.textContent = "U heeft het water verschoond!"
    console.log("schoonwater")
    getal = 0
}) 


tweedeKnop.addEventListener("click", function(){
    veranderViseten(0)
    pElement.textContent = "U heeft blub eten gegeven!"
    console.log("1x etengeven")
})

tweedeKnop.addEventListener("dblclick", function(){
    veranderViseten(1)
    pElement.textContent = "U heeft blub te veel eten gegeven!"
    console.log("2x etengeven")
})


derdeKnop.addEventListener("click", function(){
    veranderVisvriendje(0)
    pElement.textContent = "U heeft een vriendje toegevoegd!"
    console.log("1x vriendjetoevoegen")
})

derdeKnop.addEventListener("dblclick", function(){
    veranderVisvriendje(1)
    pElement.textContent = "Ze mogen elkaar!"
    console.log("2x vriendjetoevoegen")
})

