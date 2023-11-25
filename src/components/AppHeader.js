// AppHeader.js
import React from 'react';
import './AppHeader.css';
import { TwitterIcon, InstagramIcon, User, Search, ShoppingBagIcon, Music2Icon } from 'lucide-react';

const AppHeader = () => {
    const brands = "Brands";
    const shop = "Shop";
    const premium = "Premium";
    const gift_cards = "Gift Cards";
    const affiliate = "Become an Affiliate";

    return (
        <div className='header'>
            <div className='list'>
                <div className='list-left'>
                    <div className='nav-item'>
                        {brands}
                
                    </div>
                    <div className='nav-item'>
                        {shop}
                    </div>
                    <div className='nav-item'>{premium}</div>
                    <div className='nav-item'>{gift_cards}</div>
                </div>
                <div className='logo'>
                    <img src='./images/brava.webp' alt="Brava logo" />
                </div>
                <div className='list-right'>
                    <div className='nav-item'>{affiliate}</div>
                    <div className='nav-item'><TwitterIcon size={20} fill='white' /></div>
                    <div className='nav-item'><Music2Icon size={20} /></div>
                    <div className='nav-item'><InstagramIcon size={20} /></div>
                    <div className='nav-item'><User size={20} /></div>
                    <div className='nav-item'><Search size={20} /></div>
                    <div className='nav-item'><ShoppingBagIcon size={20} /></div>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;
