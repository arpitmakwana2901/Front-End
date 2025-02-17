let array = [];
for (let i = 0; i < 20; i++) array[i] = function() { return i; };
console.log(array[5]());
