import { config } from 'dotenv';

config();

export const apiKey =
  process.env.TOMTOM_API_KEY ?? 'Missing apiKey from .env file';

export const baseURL = 'https://api.tomtom.com';

export const fuzzySearch = 'search';

export const versionNumber = 2;

export const ext = 'json';

export const itemsLimit = 100;

export const countrySet = 'AU';
