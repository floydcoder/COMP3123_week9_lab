import React, { Component } from 'react';

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Marco',
      lastName: 'Stevanella',
      id: '101307949',
      schoolName: this.props.schoolName,
    };
  }
  addSchool = () => {
    this.setState({ schoolName: 'George Brown College' });
  };
  render() {
    return (
      <>
        <h3>
          {this.state.name} {this.state.lastName}
        </h3>
        <h4>{this.state.id}</h4>
        <h5>{this.state.schoolName}</h5>
        <button type='button' onClick={this.addSchool}>
          Add School Name
        </button>
      </>
    );
  }
}
