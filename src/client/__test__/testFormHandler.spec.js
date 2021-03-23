import handleSubmit from '../js/formHandler.js'

describe('testing the submit functionality', () => {
    test("testing handleSubmit() function existance", () => {
        expect(handleSubmit).toBeDefined();
    })

    /*
    test("testing handleSubmit() function expected output given certain input", () => {
        const input = "https://jamesclear.com/journaling-one-sentence"
        const output = {

        }
        expect(handleSubmit(null, input)).toEqual(output);
    })
    */
})