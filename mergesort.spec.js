describe('Split Array function', function() {
  beforeEach(function() {
    const arrOdd = [1, 2, 3, 4, 5];
    const arrEven = [1, 2, 3, 4];
  });
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2, 3], [4, 5]]);
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });
});
