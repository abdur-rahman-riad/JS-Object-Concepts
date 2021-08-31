const laptop = {
    name: 'DCL',
    memory: '4GB',
    storage: '1TB',
    processor: 'Cor i5'
};

for (const property in laptop) {
    console.log(property + " : " + laptop[property]);
}