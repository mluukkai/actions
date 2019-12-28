const sum = require('./index').sum

test('palindrome of a', () => {
  const result = sum(1, 2)

  expect(result).toBe(3)
})