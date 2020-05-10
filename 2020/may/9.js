// https://www.codewars.com/kata/520446778469526ec0000001/train/javascript
// Nesting Structure Comparison

// Complete the function/method (depending on the language) to return true/True
// when its argument is an array that has the same nesting structure as the
// first array.

//For example:

// should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );

// should return false
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );

// should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );

// should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );

// For your convenience, there is already a function 'isArray(o)' declared and
// defined that returns true if its argument is an array, false otherwise.

Array.prototype.sameStructureAs = function(other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.
  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
  if (this.length !== other.length) return false;

  for (const [idx, ele] of this.entries()) {
    if (Array.isArray(ele) && !ele.sameStructureAs(other[idx])) return false;
  }
  return true;
};

const shouldBe = (answer, result) => {
  if (answer === result) {
    console.log("Pass");
  } else {
    console.warn(`[Failure!!!]`);
  }
};
// should return true
shouldBe(true, [1, 1, 1].sameStructureAs([2, 2, 2]));
shouldBe(true, [1, [1, 1]].sameStructureAs([2, [2, 2]]));

// should return false
shouldBe(false, [1, [1, 1]].sameStructureAs([[2, 2], 2]));
shouldBe(false, [1, [1, 1]].sameStructureAs([[2], 2]));

// should return true
shouldBe(true, [[[], []]].sameStructureAs([[[], []]]));

// should return false
shouldBe(false, [[[], []]].sameStructureAs([[1, 1]]));
