let area = 0
let circum = 0
let diameter = 0
let radius = 0

document.getElementById('calculate').addEventListener('click', math)

function math () {
  diameter = document.getElementById('input').value
  diameter = parseInt(diameter)
  radius = (diameter) / 2
  area = (Math.PI * radius ** 2)
  circum = (2 * Math.PI * radius)

  document.getElementById('answer-area').innerHTML = area
  document.getElementById('answer-circum').innerHTML = circum
}