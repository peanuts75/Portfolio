
const inputNumber = document.getElementById("convertinput")
const outputText = document.getElementById("results")


document.getElementById("submit").addEventListener("click", function () {
    try{ var conversionBase = document.querySelector('input[name="numtype"]:checked').value }
    catch(error) {conversionBase = error.message}
    try{ var conversionDirection = document.querySelector('input[name="tofrom"]:checked').value }
    catch(error) {conversionDirection = error.message}
    
    console.log(conversionBase)
    console.log(conversionDirection)

    switch (conversionBase){
        case "Napier":
            const napierSymbols = "abcdefghijklmnopqrstuvwxyz"
            var tempString = ""
            var tempNumber = 0
            switch (conversionDirection){
                case "to": //this works
                    tempNumber = inputNumber.value
                    tempString = ""
                    var loopNo = 0
                    for (i=1; i<=tempNumber;i*=2){
                        if (tempNumber % (i*2) == i){
                            tempNumber -= i
                            tempString += (napierSymbols.charAt(loopNo))}
                        loopNo++}
                    outputText.innerText = tempString
                    break
                case "from": //this works
                    tempNumber = 0
                    for (i=0;i<inputNumber.value.toString().length;i++){   
                        tempNumber+=Math.pow(2,napierSymbols.search(inputNumber.value.substr(i, 1)))}
                    outputText.innerText = tempNumber
                    break
                default:
                    outputText.innerText = "You need to confirm whether you're converting to or from Napier's"
                    break
            }
            break
        case "binary":
            switch (conversionDirection){
                case "to":  //this works
                    try{
                        outputText.innerText = Number(inputNumber.value).toString(2)}
                    catch{
                        outputText.innerText = "Can't convert!"
                    }
                    break
                case "from": //this works
                    try{
                        outputText.innerText = parseInt(inputNumber.value, 2)}
                    catch{
                        outputText.innerText = "Can't convert!" 
                    }
                    break
                default:
                    outputText.innerText = "You need to confirm whether you're converting to or from binary"
                    break
            }
            break
        case "octal":
            switch (conversionDirection){
                case "to":
                    try {
                        outputText.innerText = Number(inputNumber.value).toString(8)}
                    catch{
                        outputText.innerText = "Can't convert!"
                    }
                break
                case "from":    //this works
                    try{
                        outputText.innerText = parseInt(inputNumber.value, 8)}
                    catch{
                        outputText.innerText = "Can't convert!" 
                    }
                    break
                default:
                    outputText.innerText = "You need to confirm whether you're converting to or from octal"
                    break
            }
            break
        case "hexadecimal":
            switch (conversionDirection){
                case "to":  //this works
                    try{
                        outputText.innerText = Number(inputNumber.value).toString(16)}
                    catch{
                        outputText.innerText = "Can't convert!"
                    }
                break
                case "from":    //this works
                    try{
                        outputText.innerText = parseInt(inputNumber.value, 16)}
                    catch{
                        outputText.innerText = "Can't convert!" 
                    }
                    break
                default:
                    outputText.innerText = "You need to confirm whether you're converting to or from hexadecimal"
                    break
            }
            break
        default:
            outputText.innerText = "You haven't chosen a number base"
            break
    }
})

