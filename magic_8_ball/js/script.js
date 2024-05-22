//alert("js works")
function magic8ball() {
    askquestion();
    Shake();
    getAFortune();
}
function askquestion() {
    alert("ask a yes or no question")

}
function Shake() {
    alert("Shake shake")

}
function getAFortune() {
//random
//to chose anwser
//list of anwser
var fortunes = ["yes","no","mabye"]
var num = randomNum(fortunes.length)
displayfortune(fortunes[num])

}
function randomNum(n) {
    return Math.floor(Math.random() * n)
}
function displayfortune(fortune) {
    document
    .getElementById("fortune")
    .innerHTML = fortune
}