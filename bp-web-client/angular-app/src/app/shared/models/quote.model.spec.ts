import {QuoteModel} from './quote.model';

describe('Quotes', () => {
  it('should be able to marshall into json.', () => {
    const expectedQuoteJsonString = '{"projectPlatform":"string","projectType":"string","contact":{"firstName":"Aman1","lastName":"Abrol1","email":"aman@gmail.com","phone":{"id":1,"number":"5554958","type":"home"},"address":{"street":["16241N30thPl","1200"],"city":"phoenix","state":"az","zip":"85032","county":"genesee","country":"USA"}},"company":{"name":"privateLLP","type":"LLP","budget":{"minTimeline":15000,"maxTimeline":100000},"url":"https://www.google.com","timeline":{"minTimeline":"4","maxTimeline":"7"},"description":"Test","establishedYear":2014}}';
    const quoteConfig = JSON.parse(expectedQuoteJsonString);
    const actualQuote = new QuoteModel(quoteConfig);


    expect(JSON.stringify(actualQuote.transformKeys())).toEqual(expectedQuoteJsonString);
  });
});
