const sum = require('./sum')

test('sum a + b', () => {
    expect(
        sum(1,2)
    ).toBe(3)
})