function forLoop(array){
  for (var i = 0); i<25; i++) {
    if (i = 1)
      array.push("I am 1 strange loop.")
    else {
      array.push("I am ${i} strange loops.")
    }
  }
}

function whileLoop(num){
  console.log(num);
  if (num === 0){
    return "done"
  }
  num = num - 1;
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.unshift;
  }
  while{
    array.length > 0  && maybeTrue();
  }
  return array;
}
