import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./app.scss";

export const getIpInfo = async () => {
  const url = "https://ipinfo.io/json?token=3b01bb68b0665b";
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getLinkToImage = async (season) => {
  const url = `https://api.unsplash.com/photos/random?query=winter&client_id=_dcz46V0sESBE0U7FybfY9ZgrlsJcwcNxNEDw4jwj9g`;
  const res = await fetch(url);
  const data = await res.json();
  return data.urls.regular;
};

class App extends React.Component {
  state = {
    api: null,
    lang: "en",
    backgroundImage: "",
    isLoadingBackground: false,
  };

  setApi = (obj) => {
    this.setState({
      api: obj,
    });
  };

  setLang = (url) => {
    this.setState({
      backgroundImage: url,
    });
  };

  setBackground = () => {
    this.setState({
      isLoadingBackground: !this.state.isLoadingBackground,
    });
  };

  componentDidMount() {
    getIpInfo().then((data) => {
      this.setApi(data.city);
    });
    getLinkToImage().then((data) => {
      this.setLang(data);
    });
  }
  componentDidUpdate(prevState, prevProps) {
    console.log(prevState, prevProps);
    if (prevProps.isLoadingBackground !== this.state.isLoadingBackground) {
      getLinkToImage().then((data) => {
        this.setLang(data);
      });
    }
  }

  onChangeLanguage() {
    this.setBackground();
  }
  render() {
    return (
      <div className="App">
        <div className="location ">My current Location : {this.state.api}</div>
        <div>{this.state.lang}</div>
        <div>{this.state.lang === "en" ? "ENGLISH" : "RUSSIAN"}</div>
        <div className="button" onClick={() => this.onChangeLanguage()}>
          BUTTON
        </div>
        <img src={this.state.backgroundImage} />
      </div>
    );
  }
}

export default App;
