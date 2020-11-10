import React from 'react';
import HeaderStyle from './Header.module.scss';

const Header = () => {
    return (
        <div className={HeaderStyle.headerContainer}>
            <div className={HeaderStyle.iconContainer}>
                <img 
                    src="/icons/messenger.png"
                    alt="Messenger"
                    className={HeaderStyle.headerIcon}
                />
            </div>
            
            <div className={HeaderStyle.headerTextContainer}>
                <span className={HeaderStyle.nameText}>Facebook</span>
                <span className={HeaderStyle.actionText}>Send Message</span>
            </div>
        </div>
        
    );
}
 
export default Header;