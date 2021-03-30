let area = 0
let circum = 0
let diameter = 0
let radius = 0
const pi = 3.14159

document.getElementById('calculate').addEventListener('click', math)

function math () {
  diameter = document.getElementById('input').value
  diameter = parseInt(diameter)
  radius = (diameter) / 2
  area = (pi * radius**2)
  circum = (2 * pi * radius)

  document.getElementById('answer_area').innerHTML = area 
  document.getElementById('answer_circum').innerHTML = circum
}
