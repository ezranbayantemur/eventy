import turkishCharParser from './turkishCharParser';

describe('turkishCharParser unit test', () => {
  it('should replace Turkish characters with their English equivalents', () => {
    const input = 'Bu bir Türkçe metnidir.';
    const expectedOutput = 'Bu bir Turkce metnidir.';
    expect(turkishCharParser(input)).toEqual(expectedOutput);
  });

  it('should handle strings with no Turkish characters', () => {
    const input = 'This is a test string.';
    expect(turkishCharParser(input)).toEqual(input);
  });

  it('should handle empty strings', () => {
    const input = '';
    expect(turkishCharParser(input)).toEqual(input);
  });

  it('should handle strings with mixed Turkish and non-Turkish characters', () => {
    const input = 'İstanbulda yağmurlu bir gün.';
    const expectedOutput = 'Istanbulda yagmurlu bir gun.';
    expect(turkishCharParser(input)).toEqual(expectedOutput);
  });

  it('should handle strings with uppercase Turkish characters', () => {
    const input = 'İZMİR';
    const expectedOutput = 'IZMIR';
    expect(turkishCharParser(input)).toEqual(expectedOutput);
  });
});
