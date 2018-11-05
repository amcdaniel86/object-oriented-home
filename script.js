// these notes at bottom have blackjack game - GREAT EXAMPLE OF CONSTRUCTOR FUNCTION for the game.//

let testVar;
// alert(testVar); //shows undefined
// alert(typeof testVar); //shows undefined

// testVar = null;
// alert(testVar); //shows null
// alert(typeof testVar); //shows object

null === undefined // false
null == undefined // true
null === null // true

// A classroom contains the names of the students...
let classRoom = ["peter", "mary", "josh"];

// … what if we want to add the age of each student?

classRoom  = [
  {name: "peter", age: 23},
  {name: "mary",  age: 31},
  {name: "josh",  age: 12}
];
// … what if we need to add a teacher and subject to the classRoom?

classRoom  = {
  students: [
    {name: "peter", age: 23},
    {name: "mary",  age: 31},
    {name: "josh",  age: 12}
  ],
  teacher: "Ariel",
  subject: "Object-Oriented Course"
};

function compoundInterest(p,r,n,t){
  return p * Math.pow(1 + (r/n),n*t);
}
compoundInterest(66000, 5/100, 12, 10);

let amount = 66000;
for(let i=1; i<=10; i++) {
  let interest = Math.round(compoundInterest(amount, 5/100, 12, i));
  let extra = interest - amount;
  console.log("A loan of " + i + " years, make us pay an extra $" + extra);
}

// let object = {
//   attributeName: value,
//   methodName: function() { /* code lines */ }
// }

 car = {
  name: 'Knight industries two thousand',
  isOn: false,
  sayMyName: function() {
    console.log("my name is " + this.name);
  },
  start: function(){
    this.isOn = true;
  },
  stop: function(){
    this.isOn = false;
  }
}

car.sayMyName();
car.start();
car.stop();

/* Constructor Functions
creates objects that share attributes and methods so they don't have to be repeated over and over. */


// function Name(param1, param2, ...){
//   this.attribute = param1, ... ;
//   this.method = function() { /* a */ };
// }

function Car(name){
  this.name = name;
  this.sayMyName = function() {
    console.log("my name is " + this.name);
  };
}
let kitt = new Car("knight ind two hundred");
let modelS = new Car("tesla model S supercar");
let gtr = new Car("Nissan GT-R Skyline Ed");

kitt.sayMyName();
modelS.sayMyName();
gtr.sayMyName();

kitt = {
  name: 'knight ind',
  sayMyName: function() {
    console.log('my name ' + this.name);
  }
};
gtr = {
  name: 'nissan model gtr ++',
  sayMyName: function() {
    console.log("my name " + this.name);
  }
};

kitt.sayMyName();
gtr.sayMyName();

/* BlackJack Game
player starts with 0 points
player can choose play or stand
if player chooses play, they receive new card.
  if hits 21, player wins
  if total above 21, player loses
  if total below 21, player asked again.
  if stands, total resets. */

function BlackjackGame () {
  this.play = function () {   };
  this.stand = function () {   };
}  

let game = new BlackjackGame();

game.play()
game.play()
game.stand()

/* as game progresses, BlackjackGame should keep track of state by tracking value of 'total' and current 'card'
after each move, also check 'results' and if 'play' is selected, give us 'nextcard'. */

function BlackjackGame () {
  this.total = 0;
  this.card = 0;
  this.nextCard = function () {
    this.card = parseInt((Math.random()*13) + 1); //number between 1-13
    console.log('next card... ' + this.card);
  };
  this.play = function(){
    this.nextCard();
    this.total += this.card;
    this.checkResult();
  };
  this.stand = function() {
    this.total = 0;
    console.log("scared huh? lets start again");
  };
  this.checkResult = function() {
    console.log('total = ' + this.total);
    if (this.total > 21) {
      console.log("you lost! play  again?")
      this.total = 0;
    } else if (this.total == 21) {
      console.log("you won! play again?")
      this.total = 0;
    }
  };
}

game = new BlackjackGame();

game

// function Animal(name, owner){
//   this.name = name;
//   this.owner = owner;
// }

// let myAnimal = new Animal('mickey', 'disney');
// console.log(myAnimal.name);
// //object literal notation below
// let myAnimal = {name: 'mickey', owner: 'disney'}
// console.log(myAnimal.name);

function Animal (name, owner) {
  this.name = name;
  this.owner = owner;
}
let myAnimal = new Animal('arya', 'josephine');
let yourAnimal = new Animal('max', 'owen');
console.log(myAnimal.name);
console.log(yourAnimal.name);
console.log(myAnimal.owner);
console.log(yourAnimal.owner);

// arya and max above are instances of the Animal
// class.
// Constructor functions are used to create INSTANCE objects.

function Item (name, price) {
  this.name = name;
  this.price = price;
}

function Fruit (name, price) {
  Item.call = (this, name, price);
  this.expDate = ('november');
  this.brand = ('chiquita');
}

let myItem = new Item('iPhone', '$' + 600);
let yourItem = new Item('iPod', '$' + 300);
console.log(myItem.price);
console.log(yourItem.name);

// Inheritance //
function Animal (name, owner, sound) {
  this.name = name;
  this.owner = owner;
  this.sound = sound;
}
function Dog (name, owner){ //pre-inheritance
  this.name = name;
  this.owner = owner;
  this.sound = "guau guau";
  this.humanRelation = "love";
}
myAnimal = new Animal('arya', 'josephine', '--');
let myDog = new Dog('max', 'owen');
console.log(myAnimal.name);
console.log(myDog.name);

function Animal (name, owner, sound) {
  this.name = name;
  this.owner = owner;
  this.sound = sound;
}
function Dog (name, owner){
  Animal.call(this, name, owner);
  this.sound = "guau guau";
  this.humanRelation = "love";
}
myAnimal = new Animal('arya', 'josephine', '--');
myDog = new Dog('max', 'owen');
console.log(myAnimal.name);
console.log(myDog.name);