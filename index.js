function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  return fromN === toN ? fromN : fromN + sum (fromN + 1, toN);
}

module.exports = sum;
