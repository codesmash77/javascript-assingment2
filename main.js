import Person from './person.js';

let Persons = [];

function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for(let i=0; i < random(5,10); i++){
    //For creating random person and pushing it into persons
    let name= '';
    let age = random(10,90);                //getting random age between 10 and 90
    let salary = random(300,5000);          //getting random salary between 300 dollars and 5000 dollars
    let sex = ( Math.floor(Math.random()*2) == 1 ? 'male' : 'female' )      //getting random gender between male and female

    for(let j=0; j< random(5,12); j++){
        const random = Math.floor(Math.random()*27)
        name += String.fromCharCode(97+random);         //creating random name of length 5 and 12
    }

    let dummy = new Person(name,age,salary,sex)         //creating a dummy person
    Persons.push(dummy);            //pushing the dummy person into the array Persons
}

console.log("The actual random Person array: ")
console.log(Persons);


let people = Person.quicksort(Persons,'name','asc');
console.log("quicksort with name in asc ");
console.log(people);

people = Person.quicksort(Persons,'age','asc');
console.log("quicksort with age in asc ");
console.log(people);

people = Person.quicksort(Persons,'salary','asc');
console.log("quicksort with salary in asc ");
console.log(people);

people = Person.quicksort(Persons,'sex','asc');
console.log("quicksort with sex in asc ");
console.log(people);

people = Person.quicksort(Persons,'name','desc');
console.log("quicksort with name in desc ");
console.log(people);

people = Person.quicksort(Persons,'age','desc');
console.log("quicksort with age in desc ");
console.log(people);

people = Person.quicksort(Persons,'salary','desc');
console.log("quicksort with salary in desc ");
console.log(people);

people = Person.quicksort(Persons,'sex','desc');
console.log("quicksort with sex in desc ");
console.log(people);

