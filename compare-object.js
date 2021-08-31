const first = { a: 1, b: 2 };
const second = { b: 2, a: 1 };

if (JSON.stringify(first) == JSON.stringify(second)) {
    console.log("Equals");
} else {
    console.log("Not Equal");
}