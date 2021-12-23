import React from "react";
import LangButtons from "./languagesButtons/LangButton";
import { getIpInfo, getLinkToImage } from "../../Api/Apies";
class Header extends React.Component {
  state = {
    lang: "en",
    api: [],
    backgroundImage: "",
    isUpdatedBackgroundImage: false,
  };

  setLang = (obj) => {
    this.setState({
      lang: obj,
    });
  };

  setBackground = (url) => {
    this.setState({
      backgroundImage: url,
    });
  };

  setIsUpdatedBackgroundImage = () => {
    this.setState({
      isUpdatedBackgroundImage: !this.state.isUpdatedBackgroundImage,
    });
  };

  //   inputRef = React.createRef();

  componentDidMount() {
    getIpInfo().then((data) => {
      this.setState({ api: data.region });
    });
    getLinkToImage().then((data) => {
      this.setBackground(data);
    });
  }

  componentDidUpdate(prevState, prevProps) {
    console.log(prevProps);
    if (
      prevProps.isUpdatedBackgroundImage !== this.state.isUpdatedBackgroundImage
    ) {
      getLinkToImage().then((data) => {
        this.setBackground(data);
      });
    }
  }
  render() {
    return (
      <div>
        <LangButtons
          backgroundImage={this.state.backgroundImage}
          api={this.state.api}
          lang={this.state.lang}
          setIsUpdatedBackgroundImage={this.setIsUpdatedBackgroundImage}
        />
      </div>
    );
  }
}

export default Header;
