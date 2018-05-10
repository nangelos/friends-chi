import React, { Component } from 'react';
import ChildRisk from './data-child-risk';
import EnvRisk from './data-env-risk';
import ChildProtect from './data-child-protect';
import EnvProtect from './data-env-protect';

class DataInput extends Component {
  render() {
    return (
      <div>
        <h2>Observation Data</h2>
        <form>
          <div className="topline">
            Date: <input type="date" name="date" />
            School: <input type="text" name="school-name" />
            Observer Name: <input type="text" name="observer-name" />
            Child Initials: <input type="text" name="child-initials" />
          </div>
          <div className="risk-factors" id="risk-line">
            <ChildRisk />
            <EnvRisk />
          </div>
          <div className="risk-factors" id="protective-line">
            <ChildProtect />
            <EnvProtect />
          </div>
        </form>
      </div>
    );
  }
}

export default DataInput;
