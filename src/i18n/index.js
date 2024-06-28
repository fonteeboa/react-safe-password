import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { detectLanguage } from '../services/languageService';

const resources = {
  en: {
    translation: {
      "secure.password.generator": "Secure Password Generator",
      "optional.word": "Optional word",
      "password.length": "Password Length (12-32)",
      "include.uppercase": "Include Uppercase",
      "include.lowercase": "Include Lowercase",
      "include.numbers": "Include Numbers",
      "include.symbols": "Include Symbols",
      "generate.password": "Generate Password",
      "generated.password": "Generated Password",
      "copy.password": "Copy Password",
      "password.copied": "Password copied to clipboard!",
      "select.character.option": "Please select at least one character option.",
      "password.length.error": "Password length must be between 12 and 32 characters.",
      "tooltip.password.length": "This field is for the password length",
      "invalid.length.value": "Invalid length value. Generating password with length between 12 and 32 characters.",
      "security.message": "For security reasons, we will remove 5 characters from your word to insert new characters and thus make it more secure."
    }
  },
  pt: {
    translation: {
      "secure.password.generator": "Gerador de Senha Segura",
      "optional.word": "Palavra opcional",
      "password.length": "Comprimento da senha (12-32)",
      "include.uppercase": "Incluir letras maiúsculas",
      "include.lowercase": "Incluir letras minúsculas",
      "include.numbers": "Incluir números",
      "include.symbols": "Incluir símbolos",
      "generate.password": "Gerar Senha",
      "generated.password": "Senha Gerada",
      "copy.password": "Copiar Senha",
      "password.copied": "Senha copiada para a área de transferência!",
      "select.character.option": "Por favor, selecione pelo menos uma opção de caractere.",
      "password.length.error": "O comprimento da senha deve ser entre 12 e 32 caracteres.",
      "tooltip.password.length": "Este campo é para o comprimento da senha",
      "invalid.length.value": "Valor de comprimento inválido. Gerando senha com comprimento entre 12 e 32 caracteres.",
      "security.message": "Por motivos de segurança, vamos remover 5 caracteres da sua palavra para inserir novos caracteres e assim torná-la mais segura."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    default: 'en',
    lng: detectLanguage(),
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
