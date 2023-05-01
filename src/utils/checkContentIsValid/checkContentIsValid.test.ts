import checkContentIsValid from './checkContentIsValid';

describe('checkContentIsValid unit tests', () => {
  it('should return false if field is invalid type', () => {
    expect(checkContentIsValid(undefined)).toBe(false);
    expect(checkContentIsValid(null)).toBe(false);
    expect(checkContentIsValid('&nbsp;')).toBe(false);
    expect(checkContentIsValid('<br />')).toBe(false);
    expect(checkContentIsValid('')).toBe(false);
  });

  it('should return true if field is valid type', () => {
    expect(checkContentIsValid('test')).toBe(true);
  });
});
