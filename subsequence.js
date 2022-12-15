const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [6, 1, -1];

const isValidSubsequence = (function isValidSubsequence(array, sequence) {
  const order = [];
  for (let val of sequence) {
    let position = array.indexOf(val);
    if (position === -1) return false;

    if (order.length === 0) order.push(position);
    else {
      for (let c of order) if (position < c) return false;
      order.push(position);
    }
  }
  return true;
})(array, sequence);

console.log(isValidSubsequence)