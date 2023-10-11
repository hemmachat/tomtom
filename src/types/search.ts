type Coordinate = {
    lat: number,
    lon: number,
};

// Loose data type mapping from the API
// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search#response-body---json
export type SearchResult = {
    type?: string,
    id?: string,
    score?: number,
    address?: {
      streetNumber?: string,
      streetName?: string,
      municipality?: string,
      municipalitySubdivision?: string,
      countrySecondarySubdivision?: string,
      countrySubdivision?: string,
      countrySubdivisionName?: string,
      countrySubdivisionCode?: string,
      postalCode?: string,
      extendedPostalCode?: string,
      countryCode?: string,
      country?: string,
      countryCodeISO3?: string,
      freeformAddress?: string,
      localName?: string
    },
    position?: Coordinate,
    viewport?: {
      topLeftPoint?: Coordinate,
      btmRightPoint?: Coordinate
    }    
};
