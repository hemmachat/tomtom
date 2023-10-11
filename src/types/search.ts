import { Address } from './address';

type Coordinate = {
    lat: number,
    lon: number,
};

// Loose data type mapping from the API
// This is not a full list of the properties, feel free to add anything when you need to use it.
// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search#response-body---json
export type SearchResult = {
    type?: string,
    id?: string,
    score?: number,
    address?: Address,
    position?: Coordinate,
    viewport?: {
      topLeftPoint?: Coordinate,
      btmRightPoint?: Coordinate
    }    
};
