import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {apiResponse: ""};
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
        <div className="App">
          <script>
            function load_home() {

              document.getElementById("content").innerHTML = '<object type="text/html" data="home.html" ></object>'

            }
          </script>
          <p className="App-intro">;{this.state.apiResponse}</p>
        </div>
    );
  }

}

export default App;
