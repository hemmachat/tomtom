import { getPlaceAutocomplete } from './maps-api'
import { AddressResult } from './types/address';

export async function getAutoCompleteDetails(address: string): Promise<AddressResult[]> {
    // get autocomplete results
    return await getPlaceAutocomplete(address);
}
