import React, { Component } from 'react';
import ChildRisk from './data-child-risk';
import EnvRisk from './data-env-risk';
import ChildProtect from './data-child-protect';
import EnvProtect from './data-env-protect';
import { connect } from 'react-redux'
import { addData } from '../store/data';

class DataInput extends Component {
  state = {
    date: '',
    school: '',
    observer: '',
    childInitials: '',
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const { createIssue } = this.props;
    createIssue(this.state)
    window.location.reload(false);
  }

  handleCheckboxChange = evt => {
    let { name } = evt.target
    this.setState({ [name]: !this.state[name] })
  }

  handleTextboxChange = (evt) => {
    let { name, value } = evt.target
    this.setState({ [name]: value.toUpperCase() })
  }

  render() {
    return (
      <div>
        <h1>Observation Data</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="topline">
              Date: <input required={true} type="date" name="date" onChange={this.handleTextboxChange} />
              School: <input required={true} type="text" name="school" onChange={this.handleTextboxChange} />
              Observer Name: <input required={true} type="text" name="observer" onChange={this.handleTextboxChange} />
              Child Initials: <input required={true} type="text" name="childInitials" onChange={this.handleTextboxChange} />
            </div>
            <div className="risk-factors" id="risk-line">
              <ChildRisk
                handleCheckboxChange={this.handleCheckboxChange}
                handleTextboxChange={this.handleTextboxChange} />
              <EnvRisk
                handleCheckboxChange={this.handleCheckboxChange}
                handleTextboxChange={this.handleTextboxChange} />
            </div>
            <div className="risk-factors" id="protective-line">
              <ChildProtect
                handleCheckboxChange={this.handleCheckboxChange}
                handleTextboxChange={this.handleTextboxChange} />
              <EnvProtect
                handleCheckboxChange={this.handleCheckboxChange}
                handleTextboxChange={this.handleTextboxChange} />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapState = state => ({ state });

const mapDispatch = dispatch => ({
  createIssue: issue => dispatch(addData(issue)),
});

export default connect(mapState, mapDispatch)(DataInput);
