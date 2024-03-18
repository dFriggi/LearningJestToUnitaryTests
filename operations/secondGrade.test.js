const secondGrade = require('./secondGrade')

test('Returning the roots from a second grade function with a, b, c parameters', () => {
    expect(
        secondGrade(1, -5, 6)
    ).toBe('3, 2')
})