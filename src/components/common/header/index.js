import React from 'react';
import "./header.css";
import logo from '../header/zomato-logo.png'
const Header = () => {
    return (
        <div className='max-width header'>
            <img src={logo} alt="" className='header-logo'/>
            <div className='header-right'>
                <div className='header-location-search-container'>
                    <div className='location'>
                        <div className='location-icon-name'>
                            <i className='fi fi-rr-marker absolute-center location-icon'></i>
                            <div>Dhaka</div>
                        </div>
                        <i className="fi fi-rr-caret-down absolute-center"></i>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Header;