import React, { Component } from "react";

class Counter extends Component {
  state = {
    value : this.props.value,
    tags : ["tag1", "tag2", "tag3"],
  };

  handleIncrement = () => {
    this.setState({value: this.state.value+1})  
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn">Increment</button>
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>Brak tagów</p>;
    return <ul>{this.state.tags.map(tag => <li key={tag}> { tag } </li>)}</ul>;
  }
}

export default Counter;
