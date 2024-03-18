const multiply = require('./multiply')

test('Returning a*b', () => {
    expect(
        multiply(4,3)
    ).toBe(12)
})