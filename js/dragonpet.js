let userInput
let dragonMood = 5

const dragonMoodIndicator = () => {
    switch (dragonMood) {
        case 1: return "Furious"
        case 2: return "Angry"
        case 3: return "Disgruntled"
        case 4: return "Displeased"
        case 5: return "Indifferent"
        case 6: return "Content"
        case 7: return "Pleased"
        case 8: return "Happy"
        case 9: return "Amused"
        case 10: return "Jubilant"}}

const dragonMoodUp = () => {if (dragonMood < 10){dragonMood++}}
const dragonMoodDown = () => {if (dragonMood > 1){dragonMood--}}
const checkDragonMood = () => {updateDescription(`Your dragon is ${dragonMoodIndicator()}`)}
const dragonIntroduction = () => {alert("Welcome to your virtual dragon! Please use numbers to make your decisions. Type 'stop' on the choices screen to stop playing")}
const updateDescription = (newText) => {document.getElementById("descbox").innerHTML = newText}

const dragonChoice = () => {
    userInput = prompt("What would you like to do?\n1: Feed your dragon \n2: Give your dragon a gift\n3: Clean your dragon\n4: Play with your dragon\n5: Talk to your dragon\n6: Check on your dragon")
    switch(userInput){
        case "1": feedDragon();break
        case "2": giveGift();break
        case "3": cleanDragon();break
        case "4": playWithDragon();break
        case "5": talkWithDragon();break
        case "6": checkDragonMood();break
        case "stop": stopPlaying();break
        default: dragonIntroduction();break}}

const feedDragon = () => {
    userInput = prompt("Your dragon is hungry, what should you feed them?\n1: Chocolate\n2: Ghost peppers\n3: Coal")
    switch(userInput){
        case "1": updateDescription("The chocolate wasn't too tasty to a dragon, it just turned to a gross chocolate steam"); dragonMoodDown(); break
        case "2": updateDescription("The ghost peppers were very tasty, only a dragon can take this kind of heat"); dragonMoodUp(); break
        case "3": updateDescription("The coal was good for your dragon's health, but it didn't taste particularly good"); break
        default: updateDescription("You didn't choose properly, and you've deprived the dragon of a meal. They're disappointed in you"); dragonMoodDown(); break}}

const giveGift = () => {
    userInput = prompt ("What kind of gift would you like to give them?\n1: A sheep\n2: A sword\n3: A gold coin")
    switch(userInput){
        case "1": updateDescription("The dragon immediately burns the sheep to a crisp and devours it. Clearly, this isn't a vegitarian dragon"); dragonMoodUp(); break
        case "2": updateDescription("The sword is absolutely tiny compared to the dragon, you can't help but laugh as they try to use it"); dragonMoodDown(); break
        case "3": updateDescription("The dragon can't even pick the coin up, and it's not worth much, but they appreciate the thought"); break
        default: updateDescription("Your dragon expected a gift, and was disappointed when you showed up empty-handed"); dragonMoodDown(); break}}

const cleanDragon = () => {
    userInput = prompt("You're going to need to clean your dragon, but how?\n1: Firetruck\n2: Sponge\n3: Volcano")
    switch(userInput){
        case "1": updateDescription("A firetruck got the job done, but the water was kind of cold"); break
        case "2": updateDescription("Your dragon laughs at you before you can attempt to clean them. You'll need something bigger..."); dragonMoodDown(); break
        case "3": updateDescription("The dragon bathes in lava. They look very relaxed, you almost have to restrain yourself from joining in"); dragonMoodUp(); break
        default: updateDescription("Your dragon decides to take matters into their own 'hands', finding a natural waterfall instead"); break}}

const playWithDragon = () => {
    userInput = prompt("Your dragon is bored, what will you play with them?\n1: Dungeons and Dragons\n2: Hide and seek\n3: Mario Kart")
    switch(userInput){
        case "1": updateDescription("Your dragon is offended by the idea, and gives you a lecture about dragon stereotypes"); dragonMoodDown(); break
        case "2": updateDescription("Your dragon gets bored waiting 5 miles away and decides to torch a village. They still had fun though"); dragonMoodUp(); break
        case "3": updateDescription("The controller is much too small for your dragon to hold, but they have fun watching you play anyway"); break
        default: updateDescription("You decided not to play anything together. Most of the options would have broken your bones anyway"); break}}

const talkWithDragon = () => {
    userInput = prompt("Your dragon deserves some attention, what would you like to talk about?\n1: The weather\n2: Work\n3: Geography")
    switch(userInput){
        case "1": updateDescription("The weather is a pretty dull topic, but apparently lightning feels like being tickled"); break
        case "2": updateDescription("Your dragon is clearly jealous of your ability to get a job, or even get into buildings"); dragonMoodDown(); break
        case "3": updateDescription("Apparently geography is a big topic to someone that flies over mountains, into caves and in volcanoes"); dragonMoodUp(); break
        default: updateDescription("You try starting up some small talk, but you realise you don't have much in common"); dragonMoodDown(); break}}