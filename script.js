let area = 0
let circum = 0
let diameter = 0
let radius = 0
// this is the list of variables used, set them a base value of 0

document.getElementById('calculate').addEventListener('click', math)
// this connects our button to the function

function math () {
  diameter = document.getElementById('input').value
  diameter = parseInt(diameter)
  // this will store the input and then convert it into a integer so the computer understands
  radius = (diameter) / 2
  area = (Math.PI * radius ** 2)
  circum = (2 * Math.PI * radius)
  // all the math, math.pi is the pi function built in js 
  document.getElementById('answer-area').innerHTML = area
  document.getElementById('answer-circum').innerHTML = circum
  // this is how the answer will be displayed
}
