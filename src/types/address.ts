export type Address = {
  streetNumber?: string;
  streetName?: string;
  municipality?: string;
  municipalitySubdivision?: string;
  countrySecondarySubdivision?: string;
  countrySubdivision?: string;
  countrySubdivisionName?: string;
  countrySubdivisionCode?: string;
  postalCode?: string;
  extendedPostalCode?: string;
  countryCode?: string;
  country?: string;
  countryCodeISO3?: string;
  freeformAddress?: string;
  localName?: string;
};

export type AddressResult = {
  placeId?: string;
} & Address;
