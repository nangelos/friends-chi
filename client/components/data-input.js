import React, { Component } from 'react';
import ChildRisk from './data-child-risk';
import EnvRisk from './data-env-risk';
import ChildProtect from './data-child-protect';
import EnvProtect from './data-env-protect';

class DataInput extends Component {

  handleSubmit(evt){
    evt.preventDefault()
    console.log(evt.target.value)
  }

  render() {
    return (
      <div>
        <h2>Observation Data</h2>
        <form>
          <div className="topline">
            Date: <input type="date" name="date" />
            School: <input type="text" name="school" />
            Observer Name: <input type="text" name="observer" />
            Child Initials: <input type="text" name="childInitials" />
          </div>
          <div className="risk-factors" id="risk-line">
            <ChildRisk />
            <EnvRisk />
          </div>
          <div className="risk-factors" id="protective-line">
            <ChildProtect />
            <EnvProtect />
          </div>
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default DataInput;
