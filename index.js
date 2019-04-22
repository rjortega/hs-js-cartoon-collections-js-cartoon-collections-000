function dwarfRollCall(dwarves) {
  var arr = []
  for (let i = 0; i < dwarves.length; i++){
    arr.push(`${i+1}. ${dwarves[i]} `)
  }
  var listArr = arr.join("")
  return listArr
}

// function dwarfRollCall(dwarves) {
// 	var endString = ""
//   for (var i = 0; i < dwarves.length; i++) {
//    endString += (i+1).toString()+ ". " + dwarves[i] + " ";
//   };
//   return endString;
// }

function summonCaptainPlanet(planeteerCalls){
  var arr = []
  for (let i = 0; i < planeteerCalls.length; i++){
    arr.push(`${planeteerCalls[i].toUpperCase()}!`)
  } return arr
}

// function summonCaptainPlanet(planeteerCalls){
// 	var calls = [];
//   for (var i = 0; i < planeteerCalls.length; i++) {
//    calls.push(planeteerCalls[i] + "!");
//   };
//   return calls;
// }

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return true
    } else {
      return false
    }
  }
}

// function longPlaneteerCalls(words) {
// 	var hasLongWords = false;
//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > 4){
//       hasLongWords = true;
//     }
//   };
//   return hasLongWords;
// }

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++){
    if (foods[i] === "cheddar"){
      return "cheddar"
    } else if (foods[i] === "gouda"){
      return "gouda"
    } else if (foods[i] === "camembert"){
      return "camembert"
    } else if (foods[i] === "swiss"){
      return "swiss"
  }
  return "no cheese!"
}

// function findTheCheese (foods) {
// 	var cheeses = ["cheddar", "gouda", "camembert", "swiss"];
// 	for (var i = 0; i < foods.length; i++) {
// 		for (var j = 0; j < cheeses.length; j++) {
// 			if ( cheeses[j]=== foods[i] ) {
// 				return foods[i]; //will quit and return the first cheese that it finds
// 			}
// 		}
// 	}
// 	return "no cheese!"; // returns "no cheese!" if it doesn't find any cheese :(
// }






function wordsThatStartWithB(words){
  var arr = []
  for (var i = 0; i < words.length; i++) {
    if (words[i].startsWith("b")) {
      arr.push(words[i])
    }
  }
  return arr
}

// "eric".startsWith("b") => false
// "brian".startsWith("b") => true
wordsThatStartWithB(['banana', 'cheddar', 'orange']) // ['banana']
wordsThatStartWithB(['brian', 'bobby', 'alex']) // ['brian', 'bobby']
wordsThatStartWithB(['chase', 'chad', 'cher']) // []






