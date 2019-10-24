var currentArea = 0 
const clearInput = () => {document.getElementById("parsebox").value = ""} 
var inventory = [] 

const addItem = (item) => { 
    if (inventory.includes(item) == false) { 
        inventory.push(item)}} 

const removeItem = (item) => { 
    if (inventory.includes(item)) { 
        inventory.splice(inventory.indexOf(item), 1)}} 

const getArea = (num) => { 
    var area = "" 
    
    jQuery.ajax({ 
        url: "../json/adventure.json", 
        success: function (html) { 
            area = html}, 
        async: false})
    return area[num]}

const draw = (num) => { 
    currentArea = num 

    Object.entries(getArea(num)).forEach(([key, value]) => {
        
        switch (key) {

            case "title":
                document.getElementById("titleName").innerText = value
                break

            case "subtitle":
                document.getElementById("subtitleName").innerText = value
                break

            case "desc":
                document.getElementById("gametext").innerText = getArea(currentArea).desc
                break

            default:
                if (key.charAt(0) == "+") {
                    var condition = ""

                    Object.entries(getArea(num)[key]).forEach(([subkey, subvalue]) => {
                        switch (subkey) {

                            case "add":
                                console.log(`condition is ${condition} before add`)
                                if (inventory.includes(condition) || condition == "") {
                                    addItem(subvalue)}
                                condition = ""
                                break

                            case "remove":
                                console.log(`condition is ${condition} before remove`)
                                if (inventory.includes(condition) || condition == "") {
                                    removeItem(subvalue)}
                                condition = ""
                                break

                            case "condition":
                                console.log(`condition is ${condition} before condition`)
                                condition = subvalue
                                break

                            case "goto":
                                console.log(`condition is ${condition} before goto`)
                                if (inventory.includes(condition) || condition == "") {
                                    currentArea = subvalue
                                    console.log("if confirmed")} else{ console.log("else confirmed"); break}
                                condition = ""
                                draw(currentArea)
                                break}})}}})}

const myfunc = () => { 
    
    var input = document.getElementById("parsebox").value.toLowerCase() 
    
    if (getArea(currentArea).hasOwnProperty(input) && input != 'title' && input != 'subtitle' && input != 'desc' && input != 'code') { 
        draw(getArea(currentArea)[input])} 
    
    else if (input == 'restart') {
        draw(0)
        inventory = []} 
    
    else if (input == 'info') {
        draw(3)} 
    
    else if (input == 'inv' || input == 'inventory' || input == 'i') { 
        document.getElementById("gametext").innerText += `\n\nYour current inventory consists of:\n ${inventory.join(", ")}` 

    if (inventory.join() == "") {
            document.getElementById("gametext").innerText += "nothing"}}
    
    clearInput()} 



