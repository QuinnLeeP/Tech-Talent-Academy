let temperature = prompt("Please enter the temperature today.")


let condition = prompt("What's the weather like?")


let goToWork = "";

if (temperature >= 10 && condition === "Sunny") {
    goToWork = true;
} else if (temperature >= 10 && condition === "Cloudy") {
  goToWork == true;
} else if (temperature >= 10 && condition === "Raining") {
  goToWork == false;
} else if (temperature >= 10 && condition === "Snowing"){
  goToWork == false;
} else if (temperature >= 10 && condition === "Thunder") {
  goToWork == false;
} else if (temperature > 20 && condition === "Sunny"){
  goToWork == true;
} else if (temperature > 20 && condition === "Cloudy") {
  goToWork == true;
} else if (temperature > 20 && condition === "Raining") {
  goToWork == true;
} else if (temperature > 20 && condition === "Snowing"){
  goToWork == false;
} else if (temperature > 20 && condition === "Thunder") {
  goToWork == false;
} else if (temperature > 30 && condition === "Sunny"){
  goToWork == false;
} else if (temperature > 30 && condition === "Cloudy") {
  goToWork == false;
} else if (temperature > 30 && condition === "Raining") {
  goToWork == false;
} else if (temperature > 30 && condition === "Snowing"){
  goToWork == false;
} else if (temperature > 30 && condition === "Thunder") {
  goToWork == false;
} else if (temperature < 10 && condition === "Sunny"){
  goToWork == false;
} else if (temperature < 10 && condition === "Cloudy") {
  goToWork == false;
} else if (temperature < 10 && condition === "Raining") {
  goToWork == false;
} else if (temperature < 10 && condition === "Snowing"){
  goToWork == false;
} else if (temperature < 10 && condition === "Thunder") {
  goToWork == false;
}

//another if statement to display a message depending on whether goToWork is true or false.
if (goToWork == true) {
  console.log("You can go to work and continue construction on your lab")
} else {
  console.log("The weather's not right, don't go to work today")
}