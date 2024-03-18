const divide = require('./divide')

test('Returning a / b', () => {
    expect(
        divide(8,2)
    ).toBe(4)
})