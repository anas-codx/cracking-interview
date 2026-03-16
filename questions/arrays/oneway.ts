const testCases = [
  // --- VALID: Exactly One Edit Away ---

  // Replacements (Same length, 1 char different)
  ["pale", "pake"], // l -> k
  ["pale", "bale"], // p -> b
  ["pale", "pale"], // 0 edits (often considered valid depending on strictness, but technically 0)
  ["abc", "adc"], // b -> d

  // Insertions (Shorter string needs 1 char added)
  ["ple", "pale"], // add 'a'
  ["pale", "pales"], // add 's' at end
  ["abc", "abxc"], // add 'x' in middle

  // Removals (Longer string needs 1 char removed)
  ["pale", "ple"], // remove 'a'
  ["pales", "pale"], // remove 's'
  ["abxc", "abc"], // remove 'x'

  // --- INVALID: More Than One Edit Away ---

  // Two Replacements
  ["pale", "bake"], // p->b AND l->k (2 changes)
  ["abc", "axy"], // b->x AND c->y (2 changes)

  // Two Insertions / Length difference > 1
  ["pale", "palesss"], // Difference of 3 chars
  ["abc", "abcdxy"], // Difference of 3 chars
  ["hi", "hello"], // Difference of 3 chars

  // Mixed Operations (Insert + Replace, etc.)
  ["pale", "bakel"], // p->b (replace) AND add 'l' at end (insert) = 2 edits
  ["abc", "axbyc"], // Complex mix requiring multiple steps

  // Completely Different
  ["apple", "orange"], // Totally different lengths and characters
  ["", "abc"], // Empty to 3 chars (3 inserts needed)
];

function oneway(a: string, b: string) {
  let count = 0;
  if (a == "" || b == "") return false;
  if (a.length === b.length) {
    //is it editable
    for (let i = 0; i < a.length; i++) {
      if (a.charAt(i) != b.charAt(i)) count++;
    }
  } else if (Math.abs(a.length - b.length) > 1) {
    return false;
  } else {
    //is it removable
    let [i, j] = [0, 0];
    while (i < a.length && j < b.length) {
      if (a.charAt(i) !== b.charAt(j)) {
        count++;
        if (a.length < b.length) j++;
        else i++;
        continue;
      }
      i++;
      j++;
    }
  }
  return count <= 1;
}

testCases.forEach((test) => {
  let [a, b] = test;
  console.log(a, b, oneway(a, b));
});
