const people = [
    { name: "Dom", salary: 80000 },
    { name: "Maria", salary: 250000 },
    { name: "Johnny", salary: 42000 },
];

// find all people that are earning over $80k
const highIncome = people.filter(person => {
    return person.salary >= 80000;
});

console.table(highIncome);