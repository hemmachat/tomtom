import axios from 'axios'
import { apiKey, baseURL, countrySet, ext, fuzzySearch, itemsLimit, versionNumber } from './config';
import { SearchResult } from './types/search';
import { AddressResult } from './types/address';

/**
 * Invoke the Fuzzy Search of TomTom's API which strictly to search only for Australia addresses
 * @param query Text to be searching for which can be a partial address or any search terms
 * @returns List of the matched addresses
 * @ref https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
 * @ref https://developer.tomtom.com/search-api/api-explorer
 */
export async function getPlaceAutocomplete(query: string): Promise<AddressResult[]> {
    const url = `${baseURL}/search/${versionNumber}/${fuzzySearch}/${encodeURIComponent(query)}.${ext}`;
    const params = {
        key: apiKey,
        limit: itemsLimit,
        countrySet
    };

    const autocomplete = await axios.get(url, { params });

    return autocomplete.data?.results?.map((result: SearchResult) => {
        return {
            placeId: result.id,
            streetNumber: result.address?.streetNumber,
            streetName: result.address?.streetName,
            countryCode: result.address?.countryCode,
            country: result.address?.country,
            freeformAddress: result.address?.freeformAddress,
            municipality: result.address?.municipality,
            municipalitySubdivision: result.address?.municipalitySubdivision,
            postalCode: result.address?.postalCode
        }
    });     
}
