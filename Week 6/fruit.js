let fruit = "Melon";

switch(fruit){
  case "Apple":
    case "Pear": 
    console.log("£0.57p");
      break;
    case "Banana":
      console.log("£0.20p");
        break;
    case "Melon":
    case "Pineapple": 
      console.log("£1.20p");
        break;
    case "Dragon Fruit": 
      console.log("£2.50p");
        break;
    case "Strawberry": 
      console.log("£1.50p");
        break;
    case "Orange": 
    case "Plum":
      console.log("£0.89p");
        break;
    case "Cucumber": 
    case "Mushroom": 
    case "Lettuce": 
      console.log("That's not a fruit dummy");
      break;
    default:
      console.log("No fruit registered");
      break;
  }