import React from 'react';

import { incrementAction, decrementAction } from './../actions'

import { connect } from 'react-redux';

class Counter extends React.Component {
  

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.props.decrement}>-</button>
          <span>  {this.props.countProp}  </span>
          <button onClick={this.props.increment}>+</button>
        </div>
      </div>
    )
  }
}




/**
 * Function that tells how to transform the current Redux store
 * state into props for the presentational component
 *
 * @param {Object} state - current state of the Application
 * @returns {Object} containing the props to be used in the presentational component
 */
export const mapStateToProps = state => ({
    countProp: state.counterStore.count
});
  
  /**
   * Function that tells how to transform the current Redux store
   * actions into props for the presentational component
   *
   * @param {Function} dispatch - method of the redux store
   * @returns {Object} callback props that you want to inject into
   * the presentational component
   */
  export const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction())
  });

// connect

export default connect(mapStateToProps, mapDispatchToProps)(Counter)