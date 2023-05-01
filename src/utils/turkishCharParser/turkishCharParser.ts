function turkishCharParser(text: string) {
  const turkishChars: Record<string, string> = {
    ı: 'i',
    İ: 'I',
    ş: 's',
    Ş: 'S',
    ğ: 'g',
    Ğ: 'G',
    ü: 'u',
    Ü: 'U',
    ö: 'o',
    Ö: 'O',
    ç: 'c',
    Ç: 'C',
  };
  return [...text].map(char => turkishChars[char] || char).join('');
}

export default turkishCharParser;
