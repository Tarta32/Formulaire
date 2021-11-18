let validerForm = document.getElementById("valider")
let myName = document.getElementById("name")
let mySurname = document.getElementById("surname")
let myAdress = document.getElementById("adress")
let myPostal = document.getElementById("postal")
let myCity = document.getElementById("city")
let myEmail = document.getElementById("email")
let res1 = document.querySelector(".res1")
let res2 = document.querySelector(".res2")
let res3 = document.querySelector(".res3")
let res4 = document.querySelector(".res4")
let res5 = document.querySelector(".res5")
let res6 = document.querySelector(".res6")

validerForm.addEventListener("click", (event)=>{
    let retourName = myName.value.search(/[A-Z]{2,}$/);
    let retourSurname = mySurname.value.search(/^[A-Z][a-z]{1,}$/)
    let retourPostal = myPostal.value.search(/[0-9]{5}$/)
    let retourCity = myCity.value.search(/[^0-9]{2,}$/)
    let retourEmail = myEmail.value.search(/^[a-zA-Z0-9_\-]+@[a-zA-Z_\-]+.[a-zA-Z]+$/)


    if ((retourName || retourSurname || retourCity || retourEmail || retourPostal) == -1){
        event.preventDefault()
    }
    if (retourName== -1){
        res1.innerHTML = "Votre nom est incorrect"
    }
    else {
        res1.innerHTML = " "
    }

    if (retourSurname == -1){
        res2.innerHTML = "Votre prénom est incorrect"
    }

    else{
        res2.innerHTML = " "
    }

    if (retourPostal == -1){
        res4.innerHTML = "CP incorrect"
    }

    else {
        res4.innerHTML = " "
    }

    if (retourCity == -1){
        res5.innerHTML = "Ville incorrect"
    }
    else {
        res5.innerHTML = " "
    }

    if (retourEmail == -1){
        res6.innerHTML = "Email incorrect"
    }

    else {
        res6.innerHTML = " "
    }

})