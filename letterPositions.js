const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  // logic to update results here
  for (const letters of sentence) {
    if (letters !== " " && !results[letters]) {
      results[letters] = [i];
      i++;
    } else if (results[letters]) {
      results[letters].push(i);
      i++;
    }
  }
  return results;
};

console.log(letterPositions("What a wacky String 24"));