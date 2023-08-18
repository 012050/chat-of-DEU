import React from 'react'
import LanguageToggle from './LanguageToggle'
import '../css/Header.css'


const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-relative'>
                <div className='logo'>DF&S</div>
                <LanguageToggle />
            </div>
        </div>
    )
}

export default Header
