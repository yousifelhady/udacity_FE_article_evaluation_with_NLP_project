import handleSubmit from '../js/formHandler.js'
import "babel-polyfill"

describe('testing the submit functionality', () => {
    test("testing handleSubmit() function existance", () => {
        expect(handleSubmit).toBeDefined();
    })
})