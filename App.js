import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import './App.css'
class App extends React.Component {
  state = {
    initial: false,
  };
  render() {
    const { initial } = this.state;
    return (
      <div>
        {initial ? <Header /> : <Main />}

        <div
          className={initial ? "header" : "main"}
          onClick={() => this.setState({ initial: !initial })}
        >
          APP BUTTON
        </div>
      </div>
    );
  }
}

export default App;

{
  /* <div>
<input
  className="test-input"
  value={this.state.myValue}
  onChange={this.handleChange}
  placeholder="введите значение"
/>
<div>{this.state.myValue}</div>
</div> */
}

//  constructor() {
//     super();
//     this.handleChange = this.handleChange.bind(this);
//   }
//   inputRef = React.createRef();
//   state = {
//     myValue: "",
//   };

//   handleChange(e) {
//     this.setState({ myValue: e.target.value });
//   }
