const laptop = {
    name: 'DCL',
    memory: '4GB',
    storage: '1TB',
    processor: 'Cor i5'
};

// Getting all property name
const keys = Object.keys(laptop);
console.log(keys);

// All Values
const values = Object.values(laptop);
console.log(values);

// All Entries
const pairs = Object.entries(laptop);
console.log(pairs);

// Delete an Object property
delete laptop.processor;
console.log(laptop);

// Add an Object Property
laptop.size = '14 Inch';
console.log(laptop);

// Seal The Object
Object.seal(laptop);

// Freeze the Object;
Object.freeze(laptop);
