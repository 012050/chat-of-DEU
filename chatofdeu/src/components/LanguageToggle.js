import React, { useState } from 'react'
import '../css/LanguageToggle.css'


const LanguageToggle = () => {
    const langData = [
        { code: 'KR', tooltip: 'KR', flow: 'down', flag: 'south-korea' },
        { code: 'EN', tooltip: 'EN', flow: 'down', flag: 'united-kingdom' },
        { code: 'FR', tooltip: 'FR', flow: 'down', flag: 'japan' },
        { code: 'PT', tooltip: 'PT', flow: 'down', flag: 'vietnam' },
        { code: 'DE', tooltip: 'DE', flow: 'up', flag: 'china' }
    ];

    const [selectedLang, setSelectedLang] = useState(langData[0]);
    const [updatedLangData,setUpdatedLangData]=useState(langData);

    const handleLangSelect = (lang) => {
        setSelectedLang(lang);
        const selectedLanguageIndex = langData.findIndex((element) => element.code ===lang.code)
        langData[selectedLanguageIndex]=langData[0]
        langData[0]=lang
        console.log(langData);
        setUpdatedLangData(langData)
        
    };

    return (
        <div id="select-container">
            <ul>
                {updatedLangData.map((lang) => (
                    <li
                        key={lang.code}
                        lang-selection={lang.code}
                        tooltip={lang.tooltip}
                        flow={lang.flow}
                        onClick={() => handleLangSelect(lang)}
                        className={selectedLang.code === lang.code ? 'selected' : ''}
                    >
                        <img
                            src={`https://cdn.countryflags.com/thumbs/${lang.flag}/flag-800.png`}
                            alt={lang.code}
                            className="flag-img"
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LanguageToggle
