import getCountryAndLanguage from './getCountryAndLanguage';

describe('getCountryAndLanguage util', () => {
  test('Should return a country, language and language code', () => {
    const culture = 'pt-BR';

    const returnString = getCountryAndLanguage(culture);

    const expectedReturnString = 'Brazil - Portuguese (PT)';

    expect(returnString).toBe(expectedReturnString);
  });
});
