let a = 5;
let b = 10;

function add(x,y) {
    return x = y;
}

// Arrow function
const multiply = (x,y) => x * y;

const arr = [1,2,3,4];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// for-of
for(const num of arr) {
    console.log(num)
}

// Objects as Hash Maps
const obj = {}

// obj['key1'] = 'value1';
obj['a'] =  1;
obj['b'] = 2;

console.log(obj['a'])
console.log("b" in obj)

console.log('----------------------------')

// Map
const map = new Map();
map.set('a', 1);
map.set('b', 2);

console.log(map.get('a'))
console.log(map.get('b'))

console.log("----------------------------");

// Frequency Counter
const word = 'banana';
const freq = {};

for (const char of word){
    freq[char] = (freq[char] || 0) + 1;
}

console.log(freq)
