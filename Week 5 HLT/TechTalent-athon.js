let raceNumber = Math.floor(Math.random() *1000)
/* using these two methods together will produce a random number between 0 and 999 */
let registeredEarly = false;
/* the registeredearly variable can be changed to see different runners times */
let runnerAge = 21;

if (runnerAge > 18 && registeredEarly == true) {
    raceNumber += 1000;
}       /* this condition checks whether the runner is over 18 and has registered early */
 if (runnerAge > 18 && registeredEarly == true) {
     console.log(`Runner ${raceNumber} will race at 9:30am`);
 } else if (runnerAge > 18 && registeredEarly == false) {
     console.log(`Runner ${raceNumber} will race at 11:00am`);
 } else if (runnerAge < 18) {
     console.log(`Runner ${raceNumber} will run at 12:30pm`)
 } else {
  console.log(`Runner ${raceNumber} please check in at the registration desk`)
}
