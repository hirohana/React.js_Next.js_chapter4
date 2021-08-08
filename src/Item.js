import React, { Component } from 'react'

class List extends Component {
  itm = {
    fontSize: "16px",
    color: "#00f",
    textDecoration: "underline",
    textDecorationColor: "#ddf"
  }

  num = {
    fontWeight: "bold",
    color: "red"
  }

  render() {
    return(
      <p style={this.itm}>
        <span style={this.num}>
          [{this.props.number}]&nbsp;
        </span>
        {this.props.value}
      </p>
    )
  }
}

export default List