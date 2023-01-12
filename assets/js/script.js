// TODO: Declare any global variables we need
let numberHead = 0
let numberTail = 0 
let pctHead = 0
let pctTail = 0
let total = 0 

// DOM
const flipButton = document.querySelector("#flip")
const clearButton = document.querySelector("#clear")
const statusMessage = document.querySelectorAll(".status")
const image = document.querySelector("img")
const numberHeadsCell = document.querySelector("#heads")
const numberTailsCell = document.querySelector("#tails")
const pctHeadCell = document.querySelector("#heads-percent")
const pctTailCell = document.querySelector("#tails-percent")

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools


    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
flipButton.addEventListener ("click", function(e){
    console.log ("I've been touched!")
    total ++
    let result = Math.round(Math.random() * 101)
    console.log ("result", result )

    //heads 0-50
    if (result < 51){
        numberHead ++
        statusMessage.textContent = "You got Head"
        image.src = "./assets/images/penny-heads.jpg"
    }//tails 51-100
    else {
        numberTail ++
        statusMessage.textContent = "You got Tail"
        image.src = "./assets/images/penny-tails.jpg"
    }
    console.log (numberHead, numberTail)
    pctHead = Math.round (numberHead/total * 100)
    pctTail = Math.round (numberTail/total * 100)
    console.log ("precentages", pctHead, pctTail)

    //show the result in scoreboard
    numberHeadsCell.textContent = `${numberHead}`
    numberTailsCell.textContent = `${numberTail}`
    pctHeadCell.textContent = `${pctHead}%`
    pctTailCell.textContent = `${pctTail}%`

    
    
})
   

        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
    clearButton.addEventListener("click", function(e){
        total = 0 
        pctHead = 0 
        pctTail = 0
        numberHead = 0
        numberTail = 0
        
        numberHeadsCell.textContent = `${numberHead}`
        numberTailsCell.textContent = `${numberTail}`
        pctHeadCell.textContent = `${pctHead}%`
        pctTailCell.textContent = `${pctTail}%`

        statusMessage.textContent = "Let's start flipping"
        image.src = "./assets/images/penny-heads.jpg"

    })
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})