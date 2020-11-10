import React from 'react';
import ButtonContainerStyle from './ButtonContainer.module.scss';

const ButtonContainer = ({
    headerText,
    buttonText
}) => {
    return (
        <div className={ButtonContainerStyle.buttonContainer}>
          <div className={ButtonContainerStyle.header}>
              {headerText}
          </div>
          <div className={ButtonContainerStyle.buttonWrapper}>
              <div className={ButtonContainerStyle.buttonText}>
                {buttonText}
              </div>
          </div>
        </div>
    );
}
 
export default ButtonContainer;