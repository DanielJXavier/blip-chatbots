import formatDateString from './formatDateString';

describe('formatDateString util', () => {
  test('Should return a formated date', () => {
    const date = '2020-01-31T14:35:44.510Z';

    const formatedDate = formatDateString(date);
    
    const expectedFormatedDate = '31/01/2020';

    expect(formatedDate).toBe(expectedFormatedDate);
  });
});
