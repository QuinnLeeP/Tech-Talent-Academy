const fruits = ["Apple", "Orange", "Banana", "Pear", "Peach", "Strawberry", "Cherry", "Acai"];

for (let fruit in fruits){
  
  var vowels = 0;
  var consonants = 0;
    for (var i = 0; i < fruit.length; i++) {
      switch(fruits[fruit][i]){
        case "A":
        case "E":
        case "I":
        case "O": 
        case "U": 
        case "a":
        case "e":
        case "i": 
        case "o": 
        case "u": 
          vowels = vowels + 1;
          break;
        default:
          consonants = vowels + 1;
          break;
          
      }
    }
}

console.log(`Apple has ${vowels} vowels and ${consonants} consonants`);