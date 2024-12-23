import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class SearchEngineService {

  constructor() {
  }

  public getSearchKeywords() {
    const referrer = document.referrer;
    const searchEngines = [
      { name: 'Google', domain: 'google.com', queryParam: 'q' },
      { name: 'Bing', domain: 'bing.com', queryParam: 'q' },
      { name: 'Yahoo', domain: 'search.yahoo.com', queryParam: 'p' },
      { name: 'DuckDuckGo', domain: 'duckduckgo.com', queryParam: 'q' }
    ];

    if (referrer) {
      try {
        const referrerUrl = new URL(referrer);
        const searchEngine = searchEngines.find(engine => referrerUrl.hostname.includes(engine.domain));

        if (searchEngine) {
          const searchQuery = referrerUrl.searchParams.get(searchEngine.queryParam);
          if (searchQuery) {
            console.log(`Search Engine: ${searchEngine.name}`);
            console.log(`Keywords: ${searchQuery}`);
            return { engine: searchEngine.name, keywords: searchQuery };
          }
        }
      } catch (error) {
        console.error('Error parsing referrer URL:', error);
      }
    } else {
      console.log('No referrer information available.');
    }

    return null;
  }
}
