function split(wholeArray) {
  let firstHalf = wholeArray.slice(0, Math.ceil(wholeArray.length / 2));
  let secondHalf = wholeArray.slice(Math.ceil(wholeArray.length / 2));
  return [firstHalf, secondHalf];
}

console.log(split([1, 2, 3]));
