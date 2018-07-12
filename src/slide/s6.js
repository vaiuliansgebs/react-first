import React from 'react';

class Main extends React.Component {
  
    state = { inputValue: "" }

    updateInputValue = (evt) => {
    this.setState({
        inputValue: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>  {this.state.inputValue}  </h1>
          <input value={this.state.inputValue} onChange={this.updateInputValue}/>
        </div>
      </div>
    )
  }
}

export default Main;