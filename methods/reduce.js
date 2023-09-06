// Reduce - the most Powerfull JavaScript method
// Reduce - loop over an array, and reduce it down in a single value

const people = [
    { name: "Dom", salary: 65000 },
    { name: "Jhonny", salary: 80000 },
    { name: "Christina", salary: 72000 },
];

// most earner
// .reduce(callback, initial_value);
const highestEarner = people.reduce((currentHighestEarner, person) => {
    if(currentHighestEarner == null || person.salary > currentHighestEarner.salary) {
        return person;
    }

    return currentHighestEarner;
}, null);

console.log(highestEarner);