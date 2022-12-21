const vowelInput = document.getElementById("vowel-input")
const vowelBtn = document.getElementById("check-vowel")
const consoInput = document.getElementById("conso-input")
const consoBtn = document.getElementById("check-conso")
const messageOutput = document.querySelector('.message')
const messageOutput2 = document.querySelector('.message2')


vowelBtn.addEventListener("click", vowelCheck)
consoBtn.addEventListener("click", consoCheck)

//The pattern (/[aeiou]/gi) checks for all the vowels in a string
function findVowels(str){
    return str.match(/[aeiou]/gi)
}

function findConso(str){
    return str.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || "0"
    //This checks if the it matches any of it, if not it prints no
} 

function vowelCheck(){
    let vowelChecker = vowelInput.value
    messageOutput.textContent = `There are ${findVowels(vowelChecker)?.length ?? '0'} vowels.`
    vowelInput.value = ''
    vowelInput.focus()
}

function consoCheck(){
    let consoChecker = consoInput.value
    messageOutput2.textContent = (`There are ${findConso(consoChecker)} consonants.`)
    consoInput.value = ''
    consoInput.focus()
}
