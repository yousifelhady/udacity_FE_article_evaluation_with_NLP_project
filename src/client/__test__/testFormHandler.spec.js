import handleSubmit from '../js/formHandler.js'

describe('testing the submit functionality', () => {
    test("testing handleSubmit() function existance", () => {
        expect(handleSubmit).toBeDefined();
    })
})