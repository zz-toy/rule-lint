export function sum(a, b) {
  return a + b;
}

export function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
