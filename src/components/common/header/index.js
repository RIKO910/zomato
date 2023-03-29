import React from 'react';
import "./header.css";
import logo from '../header/zomato-logo.png';
import user from '../header/user.png';
const Header = () => {
    return (
        <div className='max-width header'>
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="" className='header-logo'/>
            <div className='header-right'>
                <div className='header-location-search-container'>
                    <div className='location'>
                        <div className='location-icon-name'>
                            <i className='fi fi-rr-marker absolute-center location-icon'></i>
                            <div>Dhaka</div>
                        </div>
                        <i className="fi fi-rr-caret-down absolute-center"></i>
                    </div>
                    <div className='location-search-separator'></div>
                    <div className='header-searchbar'>
                    <i class="fi fi-rr-search absolute-center search-icon"></i>
                    <input placeholder='Search for restaurant ,cuisine or a dish' className='search-input'/>
                    </div>
                </div>
                <div className='profile-wrapper'>
                    <img src={user} alt="Profile" className='user-logo'/>
                    <span className='header-username '>Riko</span>
                    <i class="fi fi-rr-angle-small-down absolute-center profile-option-icon"></i>
                </div>
            </div>
        </div>
    );
};

export default Header;