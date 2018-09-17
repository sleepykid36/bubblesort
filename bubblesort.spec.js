describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough();
  });

  it('shows how many times swap was used', function() {
    window.bubbleSort([2, 1, 3, 4]);
    expect(window.swap.calls.count()).toEqual(1);
  });
});

// beforeAll(function () {
//   spyOn(tootsiepop, 'lick').and.callThrough(); // replace existing `tootsiepop['lick']` method
// });
// it('getting to the center of tootsiepop involves exactly three licks', function () {
//   tootsiepop.getToCenter();
//   expect(tootsiepop.lick.calls.count()).toEqual(3);
// });
