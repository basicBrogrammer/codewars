// Link: https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

// The Hashtag Generator

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//   - It must start with a hashtag (#).
//   - All words must have their first letter capitalized.
//   - If the final result is longer than 140 chars it must return false.
//   - If the input or the result is an empty string it must return false.
//
const Test = {
  assertEquals: (result, expected, message) => {
    if (result === expected) {
      console.log("[PASS]");
    } else {
      console.log("[FAIL] ", message);
    }
  }
};

const capitalize = str =>
  str.slice(0, 1).toUpperCase() + str.slice(1, str.length);

const constantize = str =>
  str
    .split(" ")
    .map(subStr => capitalize(subStr))
    .join("");

const generateHashtag = str => {
  // if string is empty return false
  if (!str.trim()) return false;

  // Capitalize and remove spaces
  const result = constantize(str);

  // return false if result is more than 140 chars
  if (result.length > 139) return false;

  return "#" + result;
};

Test.assertEquals(
  generateHashtag(""),
  false,
  "Expected an empty string to return false"
);
Test.assertEquals(
  generateHashtag(" ".repeat(200)),
  false,
  "Still an empty string"
);
Test.assertEquals(
  generateHashtag("Do We have A Hashtag"),
  "#DoWeHaveAHashtag",
  "Expected a Hashtag (#) at the beginning."
);
Test.assertEquals(
  generateHashtag("Codewars"),
  "#Codewars",
  "Should handle a single word."
);
Test.assertEquals(
  generateHashtag("Codewars Is Nice"),
  "#CodewarsIsNice",
  "Should remove spaces."
);
Test.assertEquals(
  generateHashtag("Codewars is nice"),
  "#CodewarsIsNice",
  "Should capitalize first letters of words."
);
Test.assertEquals(
  generateHashtag("code" + " ".repeat(140) + "wars"),
  "#CodeWars"
);
Test.assertEquals(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  ),
  false,
  "Should return false if the final word is longer than 140 chars."
);
Test.assertEquals(
  generateHashtag("a".repeat(139)),
  "#A" + "a".repeat(138),
  "Should work"
);
Test.assertEquals(generateHashtag("a".repeat(140)), false, "Too long");
