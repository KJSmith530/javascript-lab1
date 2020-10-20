let name = "Kyle Smith";
let age = 25;
let birthday = "May 30 1995";
let detroitGC = true;
let lifeEvents = [
  "I lived in Michigan my whole life",
  "I went to Dakota High School",
  "I have a dog named Mango",
  "I am attending GC front-end bootcamp",
];

if (detroitGC === true) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids,
  Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  counter++;
  if (randomNumber !== 5) {
    console.log(`${randomNumber} !== 5`);
  } else {
    console.log(
      `5 === 5. it took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}
