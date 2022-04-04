/* The variable of 'kelivin will stay the same */
const kelvin = 293;
/* Celcius is 273 less than kelvin so the celcius variable subtracts 273 from the kelvin varibale */
var celsius = kelvin - 273;
/* The equation to work out fahrenheit is celsius X (9/5) and plus 32 */
let fahrenheit = celsius * (9/5) + 32;
/* You often get a decimal when converting from Celsius to Fahrenheit so the built in Math object needs to be used to round down the number */
fahrenheit = Math.floor(fahrenheit);

console.log('The temperature is ${fahrenheit} degress Fahrenheit');




