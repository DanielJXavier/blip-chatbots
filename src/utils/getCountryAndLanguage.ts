import ISO6391 from 'iso-639-1';
import localeString from 'locale-string';

export default (culture: string) => {
  const { language, country } = localeString.parse(culture);
  
  const languageCode = ISO6391.getCode(language).toLocaleUpperCase();

  return `${country} - ${language} (${languageCode})`;
};
