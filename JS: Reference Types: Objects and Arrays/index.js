// const person = {
//     name: 'Arnold',
//     age: 52,
//     hobby: 'koken'
// };

// let selection = 'name';
// person[selection] = 'Zijler';
// /*person.name = 'Jan';

// console.log(person.name);
// console.log(person['name'])*/;
// console.log(person[selection]);
// /*=======================================*/

// let SeeColors = ['red', 'green', 'bleu'];

// SeeColors[3] = 'geel';
// console.log(SeeColors.length);
// /*===========================================*/
console.log('')
console.log('                  Opdracht: Reference types: Objects & Arrays')
console.log('                  ============================================')
console.log('')
console.log('============== Deel 1 Objecten:=================')

let person = {
    name: 'Arnold',
    age: 52,
    evaluations: [7, 10, 9]
}
console.log(person);
console.log(person.name);
console.log(person['name']);
console.log(person.age);
console.log(person['age']);

console.log('============== Deel 2 Arrays: =================')
let seeColors = [];
seeColors.push('groen');
seeColors.push('blauw');
seeColors.push('rood');

let greetings = {
    greeting: "hi ik ben een object",
}
// uitkomst arry
console.log(seeColors);
// de lengte van de arry
console.log(seeColors.length);
// Log het eerste element van je array naar de console, dus in ons voorbeeld: "groen".
console.log(seeColors[0]);
// Log het laatste element van je array naar de console, dus in ons voorbeeld: "rood
console.log(seeColors[seeColors.length - 1]);
// Voeg een 4de element toe aan je array met de push method. array.push() : geel
seeColors.push('geel');
console.log(seeColors);
// Voeg een cijfer toe aan je array met de push methode
seeColors.push(5);
console.log(seeColors);
// Voeg een object toe aan je array met de push methode
seeColors.push(greetings);
console.log(seeColors);
console.log('');

console.log('============== Deel 3: Bekijk een "real-life" object =================')
console.log('');

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]
// Log de naam van het laatste kattenras.
console.log(catBreeds[catBreeds.length - 1]);
// Log de energy levels van de eerste kat.
console.log(catBreeds[0].energy_level);
// Log het eerste temperament van de temperamenten van de tweede kat.
console.log(catBreeds[1].temperament[0]);
// Log het laatst temperament van de temperamenten van de derde kat.
console.log(catBreeds[2]['temperament'].pop());
// Log het favoriete voedsel van de derde kat
console.log(catBreeds[2].food.favourite_food);
console.log('');


