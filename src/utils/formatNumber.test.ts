import formatNumber from './formatNumber';

describe('formatNumber util', () => {
  test('Should return a formated number in pt-BR format', () => {
    const culture = 'pt-BR';
    const number = 10000;

    const formatedNumber = formatNumber(culture, number);

    const expectedFormatedNumber = '10,000';

    expect(formatedNumber).toBe(expectedFormatedNumber);
  });
});
