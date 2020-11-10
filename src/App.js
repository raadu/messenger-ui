import AppStyle from './App.module.scss';
import AttachmentContainer from './Components/AttachmentContainer/AttachmentContainer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className={AppStyle.mainContainer}>
      <div className={AppStyle.secondaryContainer}>
        <Header/>
        <AttachmentContainer
          url="/images/colleague.jpg"
          alt="Attachment1"
        />
        <AttachmentContainer
          url="/images/laptop.jpg"
          alt="Attachment2"
          title="Title 1"
          subtitle="Subtitle"
        />
      </div>
    </div>
  );
}

export default App;
