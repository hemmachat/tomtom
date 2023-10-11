import { describe } from '@jest/globals'
import { getPlaceAutocomplete } from '../src/maps-api'
import { getAutoCompleteDetails } from '../src'

// These are end-to-end tests and need an api key
describe('Tomtom Places E2E Tests', () => {
    
    describe('getAutoCompleteDetails', () => {

        it ('returns a promise', () => {
            const res = getAutoCompleteDetails('Charlotte Street')
            expect(res).toBeInstanceOf(Promise)
        })

        it('can fetch from the autocomplete api', async () => {
            const res = await getAutoCompleteDetails('Charlotte Street')
            // console.log('res', res);
            const firstRes = res[0];
            expect(firstRes).toHaveProperty('placeId')
            expect(firstRes).toHaveProperty('streetNumber')
            expect(firstRes).toHaveProperty('countryCode')
            expect(firstRes).toHaveProperty('country')
            expect(firstRes).toHaveProperty('freeformAddress')
            expect(firstRes).toHaveProperty('municipality')
            expect(firstRes).toHaveProperty('municipalitySubdivision')
            expect(firstRes).toHaveProperty('postalCode')
        })
    })

    describe('getPlaceAutocomplete', () => {
        it('handles no results', async () => {
            const res = await getPlaceAutocomplete('asfasffasfasafsafs');
            expect(res).toStrictEqual([])
        })

        it('handles error', async () => {
            expect(getPlaceAutocomplete('')).rejects.toThrow()
        })
    })

})
