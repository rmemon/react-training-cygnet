import React from 'react';
import { connect } from "react-redux";

class ToDo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { text: "", todos: [] };
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      let value = event.target.value;
  
      this.props.dispatch({ type: "INPUT_CHANGE" , text: value });
        
      this.setState({
        text: value
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.dispatch({ type:"ADD_TODO", text: this.props.text });
        // this.props.addToDo(this.state.text);
      this.setState({
        // todos: this.state.todos.concat(this.state.text),
        text: ""
      });
    }
  
    render() {
        console.log('++++++++++++', this.props);
      return (
        <div className="todo">
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
            {this.props.text}
            <br/>
            <button> Add </button>
          </form>
        </div>
      );
    }
  }
  const mapStateToProps = state =>{
    //   console.log(state);
      return {
          todos: state.todos,
          text: state.text,
      }
  }
  export default connect(mapStateToProps)(ToDo);