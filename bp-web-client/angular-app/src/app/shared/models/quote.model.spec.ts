import {QuoteModel} from "./quote.model";

describe("Quotes", () => {
  it("should be able to marshall into json.", () => {
    const expectedQuoteJsonString = "{\"projectPlatform\":\"string\",\"projectType\":\"string\",\"contact\":{\"firstName\":\"Aman1\",\"lastName\":\"Abrol1\",\"email\":\"aman@gmail.com\",\"phone\":{\"number\":\"1234567890\",\"type\":\"home\"}, \"address\": { \"street\": [ \"16241 N 30th Pl\", \"1200\" ], \"city\": \"phoenix\", \"state\": \"az\", \"zip\": \"85032\", \"county\": \"genesee\", \"country\": \"USA\" } }, \"company\": { \"name\": \"Private LLP\", \"type\": \"LLP\", \"establishedYear\": \"2012\", \"url\": \"https://www.google.com\", \"description\": \"description\", \"budget\": { \"min\": 15000, \"max\": 100000 }, \"timeline\": { \"min\": \"4\", \"max\": \"7\" } } }";
    const quoteConfig = JSON.parse(expectedQuoteJsonString)
    const actualQuote = new QuoteModel(quoteConfig);

    expect(JSON.stringify(actualQuote.transformKeys())).toEqual(expectedQuoteJsonString);
  });
});
