// 1. Find the Largest Number in an Array using for...of loop

function findLargest(arr) {
    let max = arr[0];
    for (const num of arr) {
      if (num > max) {
        max = num;
      }
    }
    return max;
  }
  
  // Example
  console.log(findLargest([3, 7, 2, 9, 5])); // Output: 9
  