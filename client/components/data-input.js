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
  }

  handleCheckboxChange = evt => {
    let { name } = evt.target
    this.setState({ [name]: !this.state[name] })
  }

  handleTextboxChange = (evt) => {
    let { name, value } = evt.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <h2>Observation Data</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="topline">
              Date: <input type="date" name="date" onChange={this.handleTextboxChange} value={this.state.date} />
              School: <input type="text" name="school" onChange={this.handleTextboxChange} value={this.state.school} />
              Observer Name: <input type="text" name="observer" onChange={this.handleTextboxChange} value={this.state.observer} />
              Child Initials: <input type="text" name="childInitials" onChange={this.handleTextboxChange} value={this.state.childInitials} />
            </div>
            <input type="submit" value="Submit" />
          </form>
          <div className="risk-factors" id="risk-line">
            {/* <ChildRisk /> */}
            <EnvRisk
              handleCheckboxChange={this.handleCheckboxChange}
              handleTextboxChange={this.handleTextboxChange}
              handleSubmit={this.handleSubmit} />
          </div>
          {/* <div className="risk-factors" id="protective-line">
            <ChildProtect />
            <EnvProtect />
          </div> */}
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
// export default DataInput;
