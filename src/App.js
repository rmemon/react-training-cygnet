import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          {props.name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ConnectedSeconds />
        <ConnectedToDo />
      </header>
    </div>
  );
}

export default App;

class Seconds extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setInterval(() => {
      this.props.dispatch({ type: "UPDATE_SECOND" });
    }, 1000);
  }

  render() {
    return <h1>Seconds: {this.props.seconds} </h1>;
  }
}

const mapStateToProps = state => {
  return {
    seconds: state.seconds
  };
};
let ConnectedSeconds = connect(mapStateToProps)(Seconds);

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", todos: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    this.props.dispatch({ type: "INPUT_CHANGE", text: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch({ type: "ADDD_TODO" });
  }

  render() {
    return (
      <>
        <h3>ToDo:</h3>
        <ul>
          {this.props.todos.map((todo, index) => {
            return <li key={index}> {todo} </li>;
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.props.text}
            onChange={this.handleChange}
          />
          <button> Add </button>
        </form>
      </>
    );
  }
}

const mapStateToPropsToDO = state => {
  return {
    todos: state.todos,
    text: state.text
  };
};
let ConnectedToDo = connect(mapStateToPropsToDO)(ToDo);
