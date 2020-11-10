import React, { useState } from 'react';
import AppStyle from './App.module.scss';
import AttachmentContainer from './Components/AttachmentContainer/AttachmentContainer';
import ButtonContainer from './Components/ButtonContainer/ButtonContainer';
import Header from './Components/Header/Header';

function App() {
  const [addInput, setAddInput] = useState(false);

  const toggleInput = () => {
    setAddInput(!addInput);
  }

  return (
    <div className={AppStyle.mainContainer}>
    {!addInput ? 
      <div className={AppStyle.secondaryContainer}>
        <Header
          toggleInput={toggleInput}
        />
        <AttachmentContainer
          url="/images/colleague.jpg"
          alt="Attachment1"
        />
        <ButtonContainer
          headerText="this is test text"
          buttonText="test button"
        />
        <AttachmentContainer
          url="/images/laptop.jpg"
          alt="Attachment2"
          title="Title 1"
          subtitle="Subtitle"
        />
      </div>
      :
      <div className={AppStyle.secondaryContainer}>
        <Header
          toggleInput={toggleInput}
        />
        <div>
          Input Component
        </div>
      </div>
    }
    </div>
  );
}

export default App;
