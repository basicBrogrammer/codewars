// Write a function that takes an array of numbers (integers for the tests) and
// a target number. It should find two different items in the array that, when
// added together, give the target value. The indices of these items should
// then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any
// valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or
// greater, and all of the items will be numbers; target will always be the sum
// of two different items from that array).
//
// Based on: http://oj.leetcode.com/problems/two-sum/

const Test = {};
Test.assertSimilar = (result, expected) => {
  console.log("[Result] ", result);
  console.log("[Expected] ", expected);
  console.log("[Pass] ", result[0] === expected[0] && result[1] === result[1]);
};

function twoSum(numbers, target) {
  let result;
  for (const [idxOfA, a] of numbers.entries()) {
    for ([idxOfB, b] of numbers.slice(idxOfA + 1, numbers.length).entries()) {
      if (a + b === target) {
        console.log("A idx: ", idxOfA);
        console.log("B idx: ", idxOfB);
        result = [idxOfA, idxOfB + idxOfA + 1];
        break;
      }
    }
    if (result) break;
  }
  return result;
}

function numericalCompare(a, b) {
  return a - b;
}

Test.assertSimilar(twoSum([1, 2, 3], 4).sort(numericalCompare), [0, 2]);
Test.assertSimilar(twoSum([1234, 5678, 9012], 14690).sort(numericalCompare), [
  1,
  2
]);
Test.assertSimilar(twoSum([2, 2, 3], 4).sort(numericalCompare), [0, 1]);
