import React from "react";

class LangButtons extends React.Component {
  render() {
    const { lang, api, backgroundImage, setIsUpdatedBackgroundImage } =
      this.props;
     return (
      <div>
        <div>BUTTON</div>
        <div>Language</div>
        <div>{lang}</div>
        <div>{api}</div>
        <img src={backgroundImage} />
        <div className="button" onClick={() => setIsUpdatedBackgroundImage()}>
          BUTTON
        </div>
       </div>
    );
  }
}

export default LangButtons;
