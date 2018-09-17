function bubbleSort(arr) {
  // debugger;
  for (let i = 0; i < arr.length - 1; i++) {
    let first = arr[i];
    let second = arr[i + 1];
    if (arr[i] > arr[i + 1]) {
      swap(i, i + 1, arr);
    }
  }
  return arr;
}

function swap(indexA, indexB, arr) {
  let first = arr[indexA];
  let second = arr[indexB];

  arr[indexA] = second;
  arr[indexB] = first;

  return arr;
}

console.log(bubbleSort([2, 1, 3, 4]));
