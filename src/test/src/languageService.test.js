import { detectLanguage, setLanguage } from '../../services/languageService';
import i18n from 'i18next';

// Mock i18n.changeLanguage function
jest.mock('i18next', () => ({
  changeLanguage: jest.fn(),
}));

describe('languageService', () => {
  describe('detectLanguage', () => {
    it('should return "pt" if the browser language is Portuguese', () => {
      // Mock navigator.language
      Object.defineProperty(navigator, 'language', {
        value: 'pt-BR',
        writable: true,
      });

      const language = detectLanguage();
      expect(language).toBe('pt');
    });

    it('should return "en" if the browser language is not Portuguese', () => {
      // Mock navigator.language
      Object.defineProperty(navigator, 'language', {
        value: 'en-US',
        writable: true,
      });

      const language = detectLanguage();
      expect(language).toBe('en');
    });

    it('should return "en" if the browser language is undefined', () => {
      // Mock navigator.language
      Object.defineProperty(navigator, 'language', {
        value: undefined,
        writable: true,
      });

      const language = detectLanguage();
      expect(language).toBe('en');
    });
  });

  describe('setLanguage', () => {
    it('should call i18n.changeLanguage with the provided language', () => {
      setLanguage('pt');
      expect(i18n.changeLanguage).toHaveBeenCalledWith('pt');

      setLanguage('en');
      expect(i18n.changeLanguage).toHaveBeenCalledWith('en');
    });
  });
});
