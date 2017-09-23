// Durstenfeld shuffle
export function scrambleArray(array) {
  let scrambled = [...array];
  for (let i = scrambled.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]];
  }
  return scrambled;
}
