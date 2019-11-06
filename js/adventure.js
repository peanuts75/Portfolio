var currentArea = 0                                                             //currentArea refers to the area in the json file. An 'area' is just an object of the array
const clearInput = () => {document.getElementById("parsebox").value = ""}       //clear input clears the input field
var inventory = []                                                              //the inventory is empty by default

const addItem = (item) => {                                                     //addItem adds an item to the inventory
    if (inventory.includes(item) == false) {                                    //this will only happen if the inventory doesn't already contain this item
        inventory.push(item)}}                                                  //an 'item' is a simple flag; an attribute rather than an object

const removeItem = (item) => {                                                  //this is just the inverse of the addItem command
    if (inventory.includes(item)) {                                             //it will do nothing if the object isn't in the inventory
        inventory.splice(inventory.indexOf(item), 1)}}                          //do not force-add items into the inventory, as this will only remove 1 occurence of the item in the case of duplicates

const getArea = (num) => {                                                      //getArea gets the information from an object on the json file in a usable format
    var area = ""                                                               //upon using the function, the temporary 'area' variable is blank
    
    jQuery.ajax({                                                               //jQuery's ajax is used to get the json file asynchronously. This uses a parameter to specify the area/object of the file to return
        url: "../json/adventure.json",                                          //the json file is in the json folder of the website's root folder, by default
        success: function (html) {                                              //the successful function automatically returns the url as the temporary variable 'html'
            area = html},                                                       //the html variable is then put into area, which is what will be returned. This contains the whole json file
        async: false})                                                          //using async isn't recommended, but it is the easiest way to use this
    return area[num]}                                                           //rather than returning the area, it uses the area as an array and returns object 'num', resulting in a specified area/object of the file

const draw = (num) => {                                                         //the draw function updates all of the visual elements of the screen with using a specified area/object of the json file
    currentArea = num                                                           //num is passed into the function, but currentArea is used instead if it's necessary to update the area

    Object.entries(getArea(num)).forEach(([key, value]) => {                    //this function iterates through every key-value pair in the current area/object
                                                                                //every key-value pair must be unique within the context of the area/object
        switch (key) {                                                          //this switch statement will take the key as a parameter, checking for the key of the current key-value pair

            case "title":                                                       //for title keys, the element "titleName" on the page will be changed to the value of this pair
                document.getElementById("titleName").innerText = value          //since we're using a key-value pair, we can just use the variable 'value'
                break                                                           //break is important to ensure the next case isn't run accidentally

            case "subtitle":
                document.getElementById("subtitleName").innerText = value       //subtitle and desc keys work in the same way as the title key does
                break

            case "desc":
                document.getElementById("gametext").innerText = value
                break

            default:                                                                        
                if (key.charAt(0) == "+") {                                                 //keys that start with a + are treated differently. Many of these can be used, but they must have unique names
                    var condition = ""                                                      //sometimes, these will use conditions. By default though, there are no conditions to meet

                    Object.entries(getArea(num)[key]).forEach(([subkey, subvalue]) => {     //like before, this function iterates through the subkeys and subvalues for every key-value pair that starts with a "+"; 
                        switch (subkey) {                                                   //also like before, there is a switch statement for the subkeys

                            case "add":                                                     //the add key-value pair adds the value to to the player's inventory as an item (a simple flag or attribute)
                                if (inventory.includes(condition) || condition == "") {     //this only happens if the condition is met or doesn't exist
                                    addItem(subvalue)}
                                condition = ""                                              //condition is changed back to blank, so that the next key-value pair does not require the same condition
                                break                                                       //be aware that every subkey-subvalue pair must be unique; only one condition can exist per "+" key-value pair, and it only applies to the following subkey-subvalue pair

                            case "remove":                                                  //remove key-value pair is the same as add, but removes an item from the inventory
                                if (inventory.includes(condition) || condition == "") {
                                    removeItem(subvalue)}
                                condition = ""
                                break

                            case "condition":                                               //condition sets the condition to the subvalue, allowing for inventory checks
                                condition = subvalue
                                break

                            case "goto":                                                    //goto loads a given area if the condition is met or nonexistent
                                if (inventory.includes(condition) || condition == "") {     
                                    currentArea = subvalue
                                    condition = ""
                                    draw(currentArea)}                                      //this happens using the draw function, which can become recursive. Use goto with caution
                                else{condition = ""; break}                
                                break}})}}})}

const myfunc = () => {                                                                      //myfunc was a placeholder name which stuck. It's called whenever the input field of the page is in focus and enter has been pressed
    
    var input = document.getElementById("parsebox").value.toLowerCase()                     //the input variable is set to the current contents of the input field; it is whatever has been typed
    
    if (getArea(currentArea).hasOwnProperty(input) && input != 'title' && input != 'subtitle' && input != 'desc') {  //if the input is defined in the area/object of the json file, and it isn't title, subtitle or desc...
        draw(getArea(currentArea)[input])}                                                                           //then it's assumed that the key matching the input is a location, and the area of the value is loaded. Nothing happens if this fails
    
    else if (input == 'restart') {              //if the input is restart, and it hasn't been specified in the area/object in the json file, the very first area will be loaded and the inventory will be reset to nothing
        draw(0)
        inventory = []} 
    
    else if (input == 'info') {                 //similarly, typing 'info' will take the user to area 3, the info room
        draw(3)} 
    
    else if (input == 'inv' || input == 'inventory' || input == 'i') { // the inventory can be displayed by typing 'i', 'inv' or 'inventory'
        document.getElementById("gametext").innerText += `\n\nYour current inventory consists of:\n ${inventory.join(", ")}` //the inventory will be shown as a simple list of items, seperated by commas

    if (inventory.join() == "") {   //if the inventory is empty (rather, if joining all the inventory items together results in an empty string)...
            document.getElementById("gametext").innerText += "nothing"}} //...then "nothing" will be added to the text displayed, resulting in "Your current inventory consists of: nothing"
    
    clearInput()} //at the end of this function, the input field is cleared, allowing the user to type in another command without clearing the field first

/*
        Please note, I'm totally aware that this project uses deprecated methods, unclean code, unconventional
        methods and otherwise unprofessional content. This is only a proof of concept and is not expected to
        be used for any serious projects. The functionality is limited and this is far from an efficient way
        to create a text adventure game. Be that as it may, I am proud of this project and I ask that you do not
        take credit for anything contained herein.
*/

