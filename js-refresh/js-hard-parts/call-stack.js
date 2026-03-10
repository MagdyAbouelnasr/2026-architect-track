function first() {
  second();
  console.log("first done");
}

function second() {
  third();
  console.log("second done");
}

function third() {
  console.log("third done");
}

first();

/*
Call Stack:
1. first() called
2. second() called from first()
3. third() called from second()
4. third() returns, second() continues
5. second() returns, first() continues
6. first() returns, call stack is empty
*/