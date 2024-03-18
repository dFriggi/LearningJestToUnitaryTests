const subtract = require('./subtract')

test('returning a-b', () => {
    expect(
        subtract(5,2)
    ).toBe(3)
})