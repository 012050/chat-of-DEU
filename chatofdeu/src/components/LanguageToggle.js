import React, { useState } from 'react'
import '../css/LanguageToggle.css'


const LanguageToggle = (props) => {
    const langData = [
        { code: 'kr', tooltip: 'kr', flow: 'down', flag: 'south-korea' },
        { code: 'en', tooltip: 'en', flow: 'down', flag: 'united-kingdom' },
        { code: 'jp', tooltip: 'jp', flow: 'down', flag: 'japan' },
        { code: 'vi', tooltip: 'vi', flow: 'down', flag: 'vietnam' },
        { code: 'zh-CN', tooltip: 'zh-CN', flow: 'up', flag: 'china' }
    ];

    const [selectedLang, setSelectedLang] = useState(langData[0]);
    const [updatedLangData,setUpdatedLangData]=useState(langData);

    const handleLangSelect = (lang) => {
        setSelectedLang(lang);
        props.languageSelection(lang)
        const selectedLanguageIndex = langData.findIndex((element) => element.code ===lang.code)
        langData[selectedLanguageIndex]=langData[0]
        langData[0]=lang
        for(let i=0; i<langData.length;i++)
        {
            langData[i].flow='down'
            if(langData.length-1===i){
                langData[i].flow='up'
            }
        }
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
