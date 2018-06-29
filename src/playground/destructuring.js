// const person = {
//   name: 'Dale',
//   age: 59,
//   location: {
//     city: 'Phoenix',
//     temp: 110
//   }
// };

// const {name, age} = person;

// console.log(`${name} is ${age}.`);

// const {city, temp: temp1} = person.location;
// console.log(`It's ${temp1} in ${city}.`);

const address = ['7640 Country', 'Peoria', 'AZ', '85381'];

const [street, city, state, zip] = address;
console.log(`Your are in ${street} ${city} ${state} ${zip}`);