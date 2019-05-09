import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }

  componentDidMount() {
    console.log("Component Mounted");
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      err => {
        this.setState({
          errorMessage: err.message
        });
      }
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
    if (this.state.lat === null && this.state.errorMessage === "") {
      return <div>loading...</div>;
    } else {
      return (
        <div>
          Latitude: {this.state.lat} <br />
          {this.state.errorMessage !== "" ? this.state.errorMessage : ""}
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
