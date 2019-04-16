function dwarfRollCall(dwarves) {
  var arr = []
  for (let i = 0; i < dwarves.length; i++){
    arr.push(`${i+1}. ${dwarves[i]} `)
  }
  var listArr = arr.join("")
  return listArr
}

function summonCaptainPlanet(planeteerCalls){
  var arr = []
  for (let i = 0; i < planeteerCalls.length; i++){
  arr.push(`${planeteerCalls[i].toUpperCase()}!`)
  } return arr
}

function longPlaneteerCalls(words) {
  var wordsLength = []
  for (let i = 0; i < words.length; i++){
    wordsLength.push(words[i].length)
    if (wordsLength[i] > 4){
      return true
    } else {
      return false
    }
  }
}

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++){
    if (foods[i] === "cheddar"){
      return "cheddar"
    } else if (foods[i] === "gouda"){
      return "gouda"
    } else if (foods[i] === "camembert"){
      return "camembert"
    }
  }
  return "no cheese!"
}
