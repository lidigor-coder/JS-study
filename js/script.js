const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;

if (burger && menu) {
burger.addEventListener('click', () => {
burger.classList.toggle('_active');
menu.classList.toggle('_active');
body.classList.toggle('_lock');
});
}

/* var number = 10;
console.log ( number );
var string = "Let it Be";
console.log ( string );

let persone = {
    name: "Igor",
    age: 25,
    isMarried: true
};
console.log(persone["name"]);

let arr = ['plam.png','orange.jpg','apple.bmp'];
console.log(arr[2]);

let answer = confirm("Are you here?");
console.log(answer);

var number = 144;
console.log(number);

alert("Let it be");

let answer = confirm("Are you here?");
console.log(answer); */

let incr = 10,
    decr = 10;

console.log(++incr);
console.log(--decr);