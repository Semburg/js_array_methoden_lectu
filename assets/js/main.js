// let whiteList = ["superman@super.de" , "semburg.sb@gmail.com"]

// let eingabe = document.getElementById("mailInput")


// function showResult(){
//     let searchMail = eingabe.value;
//     let searchResult = whiteList.indexOf(searchMail)

// if (searchResult  != -1){
//     console.log("Connected")
//     document.getElementById("welcome").innerHTML = "COnnected"
//     document.getElementById("error").innerHTML = ""


// } else {
//     console.log("Please contact admin")
//     document.getElementById("welcome").innerHTML = ""

//     document.getElementById("error").innerHTML = "Please contact admin"
// }

// }


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)



// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)
//?     Added 2 Items to array ab indexOf 2


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)

// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)

//?     Löscht 1 ArrayItem am index 2 und dann  Added 2 Items to array ab indexOf 2


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1);
// console.log(fruits)

//?     Löscht 2 Array Zellen ab indexOf 2

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon","Pineapple");
// console.log(fruits)

//?     Added  Items to array at the beginning - from indexOf - 0


//* 1_1_1

let addresse1 = ["ederbeckstr.", "40472", "Duesseldorf", "NRW"]
let bestFriends = ["Eugen", "Michalina", "Mario", "Schurik"]
let person = ["Simon", "Burghardt", "Kefir", 29, "Fliegen", "Russland", "SuperCoder"]

console.log(addresse1)
console.log(bestFriends)
console.log(person)

let personAddreseFriends = person.concat(addresse1,bestFriends);

console.log(personAddreseFriends)

//* 1_1_2
console.log("_________1.1.2_____________")

console.log(addresse1.length);
console.log(bestFriends.length);
console.log(person.length);
console.log(personAddreseFriends.length);

//* 1_2
console.log("_________1_2_____________")

meineTrainer = ["Georg", "Anass", "Elaine", "Hakan"]
console.log(meineTrainer)
let meineTrainer2 = new Array("Georg", "Anass", "Elaine", "Hakan");
console.log(meineTrainer2)
var meineTrainer3 = new Array();
meineTrainer3[0] = "Georg";
meineTrainer3[1] = "Anass";
meineTrainer3[2] = "Elaine";
meineTrainer3[3] = "Hakan";
console.log(meineTrainer3)

//* 1_3
console.log("_________1_3_____________")

let numberArray = [5,6,7,8,9,10];
console.log(numberArray)
console.log(numberArray.indexOf(5))
console.log(numberArray[0])
console.log(numberArray[5])

//* 1_4
console.log("_________1_4_Split_____________")

meinText1 = "Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag."
meinText2 = "Wie geht es dir heute?"
meinText3 = "Heute ist ein großer Tag für uns."

console.log(meinText1);
meinText1.split();
console.log(meinText1.split());
console.log(meinText1.split(""));
console.log(meinText1.split(" "));
console.log(meinText3.split());
console.log(meinText3.split("a"));
console.log(meinText3.split(" "));

//* 1_5_1
console.log("_________1_5_1_Push_____________")
let songs = new Array("Bohemian Rapsody", "Highway to Hell", "Hotel California");

let totalSongs = songs.push("Sweet Child O'Mine", "Yellow Submarine");
console.log(totalSongs)

totalSongs = songs;
console.log(totalSongs)
console.log(songs)

let besteFussballerAllerZeiten = ["Pele", "Ronaldo_Br", "Maradonna", "Schevchenko", "Ronaldo_Pt"]
console.log(besteFussballerAllerZeiten)
besteFussballerAllerZeiten.push("Ich", "Kahn", "Yashin")
console.log(besteFussballerAllerZeiten)

//* 1_5_2
console.log("_________1_5_2_Push_____________")
let heroAndEnemy = [["Batman", "The Joker"], ["Professor X", "Magneto"], ["Thor", "Loki"]];
console.log(heroAndEnemy)
heroAndEnemy.push(["Superman", "Lex Luthor"], ["Wolverine", "Sabretooth"], ["Ghost Rider", "Mephisto"]);
console.log(heroAndEnemy)

//* 1_6
console.log("_________1_6_Pop_____________")
console.log(totalSongs)
let entfernterSong = totalSongs.pop();
console.log(totalSongs)
console.log(entfernterSong)

let entfernterFussbaler= besteFussballerAllerZeiten.pop();
console.log(entfernterFussbaler)
entfernterFussbaler= besteFussballerAllerZeiten.pop();
entfernterFussbaler= besteFussballerAllerZeiten.pop();
entfernterFussbaler= besteFussballerAllerZeiten.pop();
console.log(besteFussballerAllerZeiten)

//* 1_7
console.log("_________1_7_unshift_____________")
let deutscheGerichte = ["Würstchen", "Käsesuppe", "Lamkuchen"];
console.log(deutscheGerichte)
deutscheGerichte.unshift("Speckkuchen", "Rostbratwurst", "Quarkkeulchen", "Sauerbraten");
console.log(deutscheGerichte)

//* 1_8
console.log("_________1_8_shift_____________")
deutscheGerichte.shift();
deutscheGerichte.shift();
deutscheGerichte.shift();
console.log(deutscheGerichte)

//* 1_9
console.log("_________1_9_shift_unshift_pop_push_Differences______________")

let someArray = [23, 54, 75];
console.log(someArray)
someArray.push(3,76,23,1,563)
console.log(someArray)
someArray.unshift(13,6,223,18,53)
console.log(someArray)
someArray.pop()
someArray.pop()
console.log(someArray)
someArray.shift()
someArray.shift()
console.log(someArray)

//* 1_9
console.log("_________1_10_splice______________")
let arrayImages = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
  ];

  console.log(arrayImages)

  console.log(arrayImages.splice(4,4))
  console.log(arrayImages)
  let delImg3 = arrayImages.splice(2);
  console.log(arrayImages);
  console.log(delImg3);


//* 1_11
console.log("____1_11_splice_hinzufuegen____")

var array3 = [ "imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg" ];
console.log(array3)
array3.splice(2,0, "imageTeilnehmer008supercode.jpg",
"imageTeilnehmer009supercode.jpg",
"imageTeilnehmer010supercode.jpg")
console.log(array3)
array3.splice(5,0,   "imageTeilnehmer014supercode.jpg",
"imageTeilnehmer015supercode.jpg",
"imageTeilnehmer016supercode.jpg",
"imageTeilnehmer017supercode.jpg",
"imageTeilnehmer018supercode.jpg",
"imageTeilnehmer019supercode.jpg")
console.log(array3)
array3.splice(2,0, "imageTeilnehmer002supercode.jpg",
"imageTeilnehmer003supercode.jpg",
"imageTeilnehmer004supercode.jpg",
"imageTeilnehmer005supercode.jpg",
"imageTeilnehmer006supercode.jpg",
"imageTeilnehmer007supercode.jpg");

array3.splice(11,0, "imageTeilnehmer011supercode.jpg",
"imageTeilnehmer012supercode.jpg",
"imageTeilnehmer013supercode.jpg");
console.log(array3)

//* 1_12
console.log("____1_11_slice____")

let arrayBsp = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
  ];
  console.log(arrayBsp)
  let sliceBsp = arrayBsp.slice(3,7);
  console.log(arrayBsp)
  console.log(sliceBsp)


  let copyImg1 = arrayBsp.slice(7,15)
  console.log(copyImg1)
  let copyImg2 = arrayBsp.slice(6,12)
  console.log(copyImg2)

  let sliceBsp2 = arrayBsp.slice(-3); //!   3 letzte Elemente (negative Zahl)
  console.log(sliceBsp2)

  let sliceBsp3 = arrayBsp.slice(16); //!  alle Elemente ab index
  console.log(sliceBsp3)









  
  







