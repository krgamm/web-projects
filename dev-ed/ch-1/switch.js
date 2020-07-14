// const text = "kiwi";
// let fruitNr = 0;

// switch (text) {
//   case "banana":
//     console.log("wow I love bananas too");
//     fruitNr = 1;
//     break;
//   case "apple":
//     console.log(`I dont like apples you crazy`);
//     fruitNr = 2;
//     break;
//   case "avocado":
//     console.log("What fruit is this?");
//     fruitNr = 3;
//     break;
//   default:
//     console.log("What fruit is that?");
//     break;
// }

let userInput = prompt("Tell me a fruit").toLowerCase();

switch (userInput) {
  case "kiwi":
    alert("Kiwi is hte first food invented by the ocena bois");
    break;
  case "banana":
    alert("My girlfriend bought 12 bananas for no reason");
    break;
  case "apple":
    alert("fun fact about apples");
    break;
  default:
    alert("that fruit is unknown to me.");
}
