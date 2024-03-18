const mod = require('./mod')

test('Returning the rest from a division of a/b', () => {
    expect(
        mod(43, 20)
    ).toBe(3)
})