import isValidUrl from '../js/checkURL.js'

describe('Test check url functionality', () => {
    test('Testing isValidUrl function defined or not', () => {
        expect(isValidUrl).toBeDefined()
    })

    test('Testing isValidUrl function return false for invalid url', () => {
        expect(isValidUrl("invalid url")).toBeFalsy()
    })

    test('Testing isValidUrl function return true for valid url', () => {
        expect(isValidUrl("https://petapixel.com/2014/03/24/anti-piracy-group-accused-stealing-photo-used-anti-piracy-ad/")).toBeTruthy()
    })
})
