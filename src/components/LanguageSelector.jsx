import React, { useState, useEffect } from 'react';
import { translate } from 'google-translate-api-browser';

const LanguageSelector = () => {
  const [selectedLang, setSelectedLang] = useState('en');

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setSelectedLang(lang);
    translate(document.body.innerText, { to: lang })
      .then(res => {
        document.body.innerText = res.text;
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className="language-selector">
      <select value={selectedLang} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="am">Amharic</option>
      </select>
    </div>
  );
};

export default LanguageSelector; 