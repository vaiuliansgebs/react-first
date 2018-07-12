import React from 'react';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>  {this.state.count}  </span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default Counter;






















/**
 * Function that tells how to transform the current Redux store
 * state into props for the presentational component
 *
 * @param {Object} state - current state of the Application
 * @returns {Object} containing the props to be used in the presentational component
 */
export const mapStateToProps = state => ({});
  
  /**
   * Function that tells how to transform the current Redux store
   * actions into props for the presentational component
   *
   * @param {Function} dispatch - method of the redux store
   * @returns {Object} callback props that you want to inject into
   * the presentational component
   */
  export const mapDispatchToProps = dispatch => ({});

// connect