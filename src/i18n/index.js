import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { detectLanguage } from '../services/languageService';

const resources = {
  en: {
    translation: {
      "Secure Password Generator": "Secure Password Generator",
      "Include Uppercase": "Include Uppercase",
      "Include Lowercase": "Include Lowercase",
      "Include Numbers": "Include Numbers",
      "Include Symbols": "Include Symbols",
      "Generate Password": "Generate Password",
      "Generated Password": "Generated Password",
      "Copy Password": "Copy Password",
      "Password copied to clipboard!": "Password copied to clipboard!",
      "Please select at least one character option.": "Please select at least one character option.",
      "Optional word": "Optional word"
    }
  },
  pt: {
    translation: {
      "Secure Password Generator": "Gerador de Senhas Seguras",
      "Include Uppercase": "Incluir Maiúsculas",
      "Include Lowercase": "Incluir Minúsculas",
      "Include Numbers": "Incluir Números",
      "Include Symbols": "Incluir Símbolos",
      "Generate Password": "Gerar Senha",
      "Generated Password": "Senha gerada...",
      "Copy Password": "Copiar",
      "Password copied to clipboard!": "Senha copiada para a área de transferência!",
      "Please select at least one character option.": "Por favor, selecione pelo menos uma opção de caracteres.",
      "Optional word": "Digite uma palavra opcional..."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: detectLanguage(),
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
