import React, { Component } from 'react';
import { connect } from 'react-redux';

class EnvProtect extends Component {
  state = {
    goodCaregiver: false,
    goodCaregiverText: '',
    supervision: false,
    supervisionText: '',
    extended: false,
    extendedText: '',
    traditions: false,
    traditionsText: '',
    community: false,
    communityText: '',
    resources: false,
    resourcesText: '',
    familyStress: false,
    familyStressText: '',
    familyViolence: false,
    familyViolenceText: '',
  }

  render() {
    return (
      <div className="note-half">
        <h2>Environment Protective Factors Observed</h2>
        <div className="line">
          <input type="checkbox" name="goodCaregiver" onChange={this.props.handleCheckboxChange} />
          Good Relationship with at Least One Caring and Consistent Caregiver
          <textarea
            wrap="soft"
            className="factor-details"
            name="goodCaregiverText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="supervision" onChange={this.props.handleCheckboxChange} />
          Family Monitors and Supervises Child Well
          <textarea
            wrap="soft"
            className="factor-details"
            name="supervisionText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="extended" onChange={this.props.handleCheckboxChange} />
          Extended Family Support
          <textarea
            wrap="soft"
            className="factor-details"
            name="extendedText"
            onChange={this.props.handleTextboxChange} />
        </div>
        <div className="line">
          <input type="checkbox" name="traditions" onChange={this.props.handleCheckboxChange} />
          Strong Positive Traditions
          <textarea
            wrap="soft"
            className="factor-details"
            name="traditionsText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="community" onChange={this.props.handleCheckboxChange} />
          Strong Community Ties/Neighbors Who Give Extra Support
          <textarea
            wrap="soft"
            className="factor-details"
            name="communityText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="resources" onChange={this.props.handleCheckboxChange} />
          Access to Basic Resources (Money, Housing, etc.)
          <textarea
            wrap="soft"
            className="factor-details"
            name="resourcesText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="familyStress" onChange={this.props.handleCheckboxChange} />
          Family Has Ability to Manage Stress Well
          <textarea
            wrap="soft"
            className="factor-details"
            name="familyStressText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="familyViolence" onChange={this.props.handleCheckboxChange} />
          No Family Violence in the Home
          <textarea
            wrap="soft"
            className="factor-details"
            name="familyViolenceText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
      </div>
    );
  }
}

const mapState = state => ({ state })

export default connect(mapState, null)(EnvProtect);
