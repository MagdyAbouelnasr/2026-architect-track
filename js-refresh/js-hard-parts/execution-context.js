const num = 3;

function multiplyByTwo(x) {
  return x * 2;
}

const result = multiplyByTwo(num);

console.log(result);

/* Memory Phase
num -> 3
multiplyByTwo -> function
result -> uninitialized

Execution Phase
num = 3
multiplyByTwo called
result = 6
*/