import React from 'react'
import LanguageToggle from './LanguageToggle'
import '../css/Header.css'

/**
 * @returns 헤더
 */
const Header = (props) => {
    return (
        <div className='header-container'>
            <div className='header-relative'>
                <div className='logo'>DF&S</div>
                <LanguageToggle languageSelection={props.languageSelection} />
            </div>
        </div>
    )
}

export default Header
