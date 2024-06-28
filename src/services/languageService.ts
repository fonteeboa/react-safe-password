import i18n from 'i18next';

export const detectLanguage = (): string => {
  const language = navigator.language || (navigator as any).userLanguage;
  return language?.startsWith('pt') ? 'pt' : 'en';
};

export const setLanguage = (language: string): void => {
  i18n.changeLanguage(language);
};
