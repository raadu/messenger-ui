import React from 'react';
import HeaderStyle from './Header.module.scss';

const Header = ({
    toggleInput,
    headerText
}) => {
    return (
        <div 
            className={HeaderStyle.headerContainer}
            onClick={() => toggleInput()}
        >
            <div className={HeaderStyle.iconContainer}>
                <img 
                    className={HeaderStyle.headerIcon}
                    src="/icons/messenger.png"
                    alt="Messenger"
                />
            </div>
            <div className={HeaderStyle.headerTextContainer}>
                <div className={HeaderStyle.nameText}>
                    Facebook
                </div>
                <div className={HeaderStyle.actionText}>
                    {headerText}
                </div>
            </div>
        </div>
    );
}

export default Header;
