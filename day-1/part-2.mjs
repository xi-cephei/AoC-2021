import { input } from './input.mjs';

const results = input.reduce((prev, next, index) => {
  const window = input.slice(index, index + 3);

  if (index === 0 || window.length !== 3) {
    return prev;
  }

  const value = window.reduce((a, b) => a + b, 0);

  return {
    increased: (value > prev.value) ? prev.increased + 1 : prev.increased,
    value: value
  };
}, {
  increased: 0,
  value: 0
});

console.log(results.increased);
