import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Seconds />
        <ToDo />
      </header>
    </div>
  );
}

export default App;

class Seconds extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1
      });
    }, 1000);
  }

  render() {
    return <h1>Seconds: {this.state.seconds} </h1>;
  }
}

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", todos: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;

    this.setState({
      text: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      todos: this.state.todos.concat(this.state.text),
      text: ""
    });
  }

  render() {
    return (
      <div>
        <h3>ToDo:</h3>
        <ul>
          {this.state.todos.map((todo, index) => {
            return <li key={index}> {todo} </li>;
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button> Add </button>
        </form>
      </div>
    );
  }
}
