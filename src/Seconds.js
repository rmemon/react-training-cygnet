import React from 'react';
import { connect } from "react-redux";

class Seconds extends React.Component {


  componentDidMount() {
    setInterval(() => {

      this.props.dispatch({ type: 'UPDATE_SECONDS' })
    }, 1000);
  }

  render() {
    return <h1>Seconds: {this.props.seconds} </h1>;
  }
}
function mapStateToProps(state) {
  return {
    seconds: state.seconds
  };
}
const connectedSeconds = connect(mapStateToProps)(Seconds);
export default connectedSeconds;

// export default connect(mapStateToProps)(Seconds)