const rollButton = document.querySelector("button")
const diceImage = document.querySelector("diceimage")
const winLossText1 = document.querySelector(".winloss1")
const winLossText2 = document.querySelector(".winloss2")
const playerText = document.querySelector(".playerdisplay")

var score = [0,0]
var wins = [0,0]
var losses = [0,0]
var player = 0

percentageCalc = (input) => {
    var precision = 0
    if (losses[input] < 5){ precision = 0}
    else if (losses[input] < 15) {precision = 1}
    else if (losses[input] < 25) {precision = 2}
    else if (losses[input] < 75) {precision = 3}
    else {precision = 4}
    if (wins[input]>0 && losses[input]>0){
        return `, they are ${((wins[input]/(losses[input]+wins[input]))*100).toFixed(precision)}% successful`}
    else {return ""}}

updateWinLoss = (update) => {
    if(update == "win"){wins[player]++}else{losses[player]++}
    winLossText1.innerHTML = `Player 1 has ${wins[0]} wins and ${losses[0]} losses${percentageCalc(0)}`
    if (wins[0]>wins[1]){winLossText1.style.color="white"}else{winLossText1.style.color="gray"}
    winLossText2.innerHTML = `Player 2 has ${wins[1]} wins and ${losses[1]} losses${percentageCalc(1)}`
    if (wins[1]>wins[0]){winLossText2.style.color="white"}else{winLossText2.style.color="gray"} }

rollButton.addEventListener("click", () => {
    let diceRoll= Math.floor(Math.random()*6)+1
    diceimage.src = `../img/dice${diceRoll}.png`
    checkTotal(diceRoll)})

checkTotal = (roll) => {
    if (roll == 1){
        score[player] = 0
        rollButton.innerText = `Player ${player+1} lost!`
        updateWinLoss("loss")
        switchPlayer()}
    else {
        score[player] += roll
        if (score[player] > 19) {
            rollButton.innerText = `Player ${player+1} won!`
            score[player] = 0
            updateWinLoss("win")
            switchPlayer()}
        else {
            rollButton.innerText = `Player ${player+1}: ${score[player]}`}}}

switchPlayer = () => {
    if (player == 1){
        player=0
        playerText.innerText = "Player One"
    }else{
        player=1
        playerText.innerText = "Player Two"}}