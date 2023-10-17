import axios from 'axios';
import {
  apiKey,
  baseURL,
  countrySet,
  ext,
  fuzzySearch,
  itemsLimit,
  versionNumber,
} from './config';
import { SearchResult } from './types/search';
import { AddressResult } from './types/address';

const getFuzzySearchUrl = (query: string) => {
  return `${baseURL}/search/${versionNumber}/${fuzzySearch}/${encodeURIComponent(
    query,
  )}.${ext}`;
};

const mapSearchAddressResult = (result: SearchResult): AddressResult => {
  return {
    placeId: result.id,
    streetNumber: result.address?.streetNumber,
    streetName: result.address?.streetName,
    countryCode: result.address?.countryCode,
    country: result.address?.country,
    freeformAddress: result.address?.freeformAddress,
    municipality: result.address?.municipality,
    municipalitySubdivision: result.address?.municipalitySubdivision,
    postalCode: result.address?.postalCode,
  };
};

/**
 * Invoke the Fuzzy Search of TomTom's API which strictly to search only for Australia addresses
 * @param query Text to be searching for which can be a partial address or any search terms
 * @returns List of the matched addresses
 * @ref https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
 * @ref https://developer.tomtom.com/search-api/api-explorer
 */
export async function getPlaceAutocomplete(
  query: string,
): Promise<AddressResult[]> {
  if (!query) {
    throw new Error('Cannot search with an empty query.');
  }

  const url = getFuzzySearchUrl(query);
  const params = {
    key: apiKey,
    limit: itemsLimit,
    countrySet,
  };

  try {
    const autocomplete = await axios.get(url, { params });

    return autocomplete.data?.results?.map((result: SearchResult) => {
      return mapSearchAddressResult(result);
    });
  } catch (error: unknown) {
    console.log('error', error);
    // TODO: capture axios error from the API call and put some loggings mechanism here
    throw error;
  }
}
