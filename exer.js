// The dot product of two vectors
function dotProduct(arr1, arr2) {
  let result = 0;
  for (let i = 0; i < arr1.length; i++) {
    result += arr1[i] * arr2[i];
  }
  return result;
}

//  check if two vectors are orthogonal
function isOrthogonal(array1, array2) {
  return dotProduct(array1, array2) === 0;
}

//  Test orthogonality of n pairs of vectors
function testOrthogonality(vectors) {
  let results = [];
  for (let i = 0; i < vectors.length; i += 2) {
    results.push(isOrthogonal(vectors[i], vectors[i + 1]));
  }
  return results;
}
 // Part2

function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}