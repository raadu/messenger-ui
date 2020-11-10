import React from 'react';
import InputContainerStyle from './InputContainer.module.scss';

const InputContainer = () => {
    return (
        <div className={InputContainerStyle.inputContainer}>
          <input
              className={InputContainerStyle.inputField}
              placeholder="Type Here"
          />
        </div>
    );
}

export default InputContainer;
