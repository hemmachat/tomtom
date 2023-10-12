Changes to the code:
========
- Refactor the configuration values to `config.ts`
- Create custom types mapping for API fetching results from the API and our own address results
- Only use the `API Key` in one function which is to make calls to TomTom's API and remove the rest
- Specify the API URL to be in parts in `config.ts` for easier change later
- Add try/catch in API call function
- Add some function comments for main functions
- Immediate return from the API function when the search query is empty
