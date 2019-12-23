var _ = require('lodash');
const assert = require('assert');

const strNums = ['2', '8', '4', '7' ,'1' ,'2' ,'8' ,'5' ,'5','9', '10', '12', '6']



function chunk(arr, num) {
  return _.chunk(arr, num);
}

function reverse(arr, num) {
  return _.reverse(arr, num);
}

function without(arr, num) {
  return _.without(arr, num)
}

if (typeof describe === 'function') {
  describe('chunk', () => {
    it('return an array of arrays the size of the chunk number', () => {
      const array = chunk(strNums, 5);
      assert.equal(
        array[0].length, 5
      );
    });
  });
} else {
  console.log(chunk(strNums, 5));
}


if (typeof describe === 'function') {
  describe('reverse', () => {
    it('checks for the last position in the array after reversed', () => {
      const array = reverse(strNums);
      assert.equal(
        array[array.length-1], '2'
      );
    });
  });
}

describe('without', () => {
  it('', () => {
    const array = without(strNums);
    assert.equal(
      array[0].length, 5
    );
  });
});
// } else {
// console.log(chunk(strNums, 5));
// }



