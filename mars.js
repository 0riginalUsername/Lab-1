alert('Welcometo the Mars Adventure')
const username = prompt("Hi there. What's your name?");
alert(`hello ${username}`)
alert("Hello this game is very limited but you MIGHT go to mars :)")
let answer = prompt("Are you excited? (Type Y or N")

if(answer === `Y` || answer === `y`){
alert("I knew you’d say that. It’s so cool that you’re going to Mars!")}
if(answer === `N` || answer === `n` ){
alert("Well, it’s too late to back out now.")    
}
alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt('How many suitcases do you plan to bring?');
numSuitcases = Number(numSuitcases);
if(numSuitcases > 2){
    alert( `That's way too many! You'll have to pack more lightly.`)
}
else(numSuitcases <= 2);{
    alert(`Perfect. you'll certainly fit in the spaceship!`)
}
alert("You're allowed to bring one companion animal with you.");

const companionType = prompt('What kind of companion animal would you like to bring?');
let companionName = prompt("What is your companion's name?");



let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();

let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();

companionName = firstLetter + otherLetters;

alert( `Cool, so you're bringing ${companionName} the ${companionType}, great name!`);

alert('NASA has a interior design team offering to outfit your space ship.');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Port-a-Potty
B  Void.
C  Victorian-era steampunk
`);

let shipAnswer = prompt(`A  Port-a-Potty
    B  Void.
    C  Victorian-era steampunk`)

 if (shipAnswer === `A` || shipAnswer === `a`) {
    alert(`Wow! you stink!`)
    alert(`no, actually you stink`)
}
else if (shipAnswer === `B` || shipAnswer === `b`){
    alert(`Nothing like some ________________ to spruce things up!`)
}
else if (shipAnswer === `C` || shipAnswer === `c`){
    alert(`Nice, you chose the default answer, you always interesting, aren't you?`)
}   
let timer = 5;
while (timer > 0 ) {
  alert(`${timer}...`);
  timer -= 1;
}
alert('*** LIFTOFF ***');
