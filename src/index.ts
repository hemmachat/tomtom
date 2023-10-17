import { getPlaceAutocomplete } from './maps-api';
import { AddressResult } from './types/address';

/**
 * Perform an address search
 * @param address A partial text of the address to search
 * @returns List of the matched addresses
 */
export async function getAutoCompleteDetails(
  address: string,
): Promise<AddressResult[]> {
  // get autocomplete results
  // Leave this abstraction function call for future logic implementation...
  return await getPlaceAutocomplete(address);
}
