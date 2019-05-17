import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "./main.css";
class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("Component Mounted");
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("Component Re-Rendered");
  }

  componentWillUnmount() {
    console.log("Component Un-Mounted");
  }

  render() {
    console.log("Component Rendered");
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
