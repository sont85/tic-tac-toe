import React from 'react';
import ReactDOM from 'react-dom';
let userRef = firebase.database().ref("users");


class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World</h1>
  }
}

class ClickMe extends React.Component {
  // trigger by onClick, just a test for firebase
  setFirebase() {
    userRef.set({age: 3});
  }
  render() {
    return <h1 onClick={this.setFirebase}>Click Me</h1>
  }
}

class Main extends React.Component {
  render() {
    return <div>
      <HelloWorld></HelloWorld>
      <ClickMe></ClickMe>
    </div>
  }
}

ReactDOM.render(<Main/>, document.getElementById('main'));
