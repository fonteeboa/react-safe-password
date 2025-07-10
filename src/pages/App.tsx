import React, { useState, useEffect } from 'react';
import { Switch, Input, Button, message, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import { setLanguage, detectLanguage } from '../services/languageService';
import { SwitchConfig } from '../domain';
import logo from "../assets/images/logo_brand.png";
import '../i18n';

const App: React.FC = () => {
  const { t } = useTranslation();
  const [password, setPassword] = useState<string>('');
  const [length, setLength] = useState<number>(16);
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
    { label: t('include.uppercase'), state: includeUppercase, setState: setIncludeUppercase },
    { label: t('include.lowercase'), state: includeLowercase, setState: setIncludeLowercase },
    { label: t('include.numbers'), state: includeNumbers, setState: setIncludeNumbers },
    { label: t('include.symbols'), state: includeSymbols, setState: setIncludeSymbols }
  ];

  const generatePassword = () => {
    let adjustedLength = length;
    let adjustedUserWord = userWord.trim();

    if (adjustedLength < 12 || adjustedLength > 32) {
      adjustedLength = Math.floor(Math.random() * (32 - 12 + 1)) + 12;
      message.info(t('invalid.length.value'));
      setLength(adjustedLength);
    }

    if (adjustedUserWord.length > adjustedLength || adjustedUserWord.length === adjustedLength) {
      message.info(t('security.message'));
      adjustedUserWord = adjustedUserWord.slice(0, -5)
    }

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let charset = '';
    includeUppercase && (charset += uppercaseChars);
    includeLowercase && (charset += lowercaseChars);
    includeNumbers && (charset += numberChars);
    includeSymbols && (charset += symbolChars);

    if (charset === '') {
      message.error(t('select.character.option'));
      return;
    }

    while (adjustedUserWord.length < adjustedLength) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      const newChar = charset[randomIndex];
      if (!/([a-zA-Z0-9!@#$%^&*()_+~`|}{[\]:;?><,./-])\1\1/.test(adjustedUserWord + newChar)) {
        adjustedUserWord += newChar;
      }
    }

    adjustedUserWord = adjustedUserWord.split('').sort(() => 0.5 - Math.random()).join('');

    setPassword(adjustedUserWord);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    message.success(t('password.copied'));
  };

  return (
    <div className="App">
      <div className="lock-card">
        <div className="lock-icon">
          <img src={logo} alt="Sonar Exporter Logo" />
        </div>
        <h2>{t('secure.password.generator')}</h2>
        <div className="input-div">
          <Input
            placeholder={t('optional.word')}
            className="input-field"
            value={userWord}
            onChange={(e) => setUserWord(e.target.value.trim())}
          />
          <Tooltip title={t('tooltip.password.length')}>
            <Input
              type="number"
              min={12}
              max={32}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              placeholder={t('password.length')}
              className="length-input"
            />
          </Tooltip>
        </div>
        <div className="switches">
          {switchConfigs.map((config, index) => (
            <label key={index + config.label} className="switch-label">
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
          <Button onClick={generatePassword} className="generate-btn">{t('generate.password')}</Button>
        </div>

        <div className="padding">
          <Input
            value={password}
            placeholder={t('generated.password')}
            readOnly
            className="password-field"
          />
        </div>
        <div className="padding">
          <Button onClick={copyToClipboard} className="copy-btn">{t('copy.password')}</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
