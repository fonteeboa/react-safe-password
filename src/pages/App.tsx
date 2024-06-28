import React, { useState, useEffect } from 'react';
import { Switch, Input, Button, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { setLanguage, detectLanguage } from '../services/languageService';
import { SwitchConfig } from '../domain';
import '../i18n';

const App: React.FC = () => {
  const { t } = useTranslation();
  const [password, setPassword] = useState<string>('');
  const [length] = useState<number>(16);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [userWord, setUserWord] = useState<string>('');

  useEffect(() => {
    const language = detectLanguage();
    setLanguage(language);
  }, []);

  const switchConfigs: SwitchConfig[] = [
    { label: t('Include Uppercase'), state: includeUppercase, setState: setIncludeUppercase },
    { label: t('Include Lowercase'), state: includeLowercase, setState: setIncludeLowercase },
    { label: t('Include Numbers'), state: includeNumbers, setState: setIncludeNumbers },
    { label: t('Include Symbols'), state: includeSymbols, setState: setIncludeSymbols }
  ];

  const generatePassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let charset = '';
    if (includeUppercase) charset += uppercaseChars;
    if (includeLowercase) charset += lowercaseChars;
    if (includeNumbers) charset += numberChars;
    if (includeSymbols) charset += symbolChars;

    if (charset === '') {
      message.error(t('Please select at least one character option.'));
      return;
    }

    let newPassword = userWord;
    while (newPassword.length < length) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      const newChar = charset[randomIndex];
      // Evitar padrões previsíveis
      if (!/([a-zA-Z0-9!@#$%^&*()_+~`|}{[\]:;?><,./-])\1\1/.test(newPassword + newChar)) {
        newPassword += newChar;
      }
    }

    // Embaralhar a senha para melhor segurança
    newPassword = newPassword.split('').sort(() => 0.5 - Math.random()).join('');

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    message.success(t('Password copied to clipboard!'));
  };

  return (
    <div className="App">
      <div className="lock-card">
        <div className="lock-icon">
          <LockOutlined style={{ fontSize: '48px', color: '#00d4ff' }} />
        </div>
        <h2>{t('Secure Password Generator')}</h2>
        <Input
          placeholder={t('Optional word')}
          className="input-field"
          value={userWord}
          onChange={(e) => setUserWord(e.target.value)}
        />
        <div className="switches">
          {switchConfigs.map((config, index) => (
            <label key={index} className="switch-label">
              <span>{config.label}</span>
              <Switch
                checked={config.state}
                onChange={() => config.setState(!config.state)}
                className="switch"
              />
            </label>
          ))}
        </div>
        <div className=''>
          <Button onClick={generatePassword} className="generate-btn">{t('Generate Password')}</Button>
        </div>

        <div className="padding">
          <Input
            value={password}
            placeholder={t('Generated Password')}
            readOnly
            className="password-field"
          />
        </div>
        <div className="padding">
          <Button onClick={copyToClipboard} className="copy-btn">{t('Copy Password')}</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
