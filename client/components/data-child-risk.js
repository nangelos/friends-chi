import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChildRisk extends Component {
  state = {
    anger: false,
    angerText: '',
    withdrawal: false,
    withdrawalText: '',
    esteem: false,
    esteemText: '',
    attendance: false,
    attendanceText: '',
    performance: false,
    performanceText: '',
    peerRelationships: false,
    peerRelationshipsText: '',
    adultRelationships: false,
    adultRelationshipsText: '',
    hygiene: false,
    hygieneText: '',
    sexBehavior: false,
    sexBehaviorText: '',
    frustrated: false,
    frustratedText: '',
    depression: false,
    depressionText: '',
    cries: false,
    criesText: '',
    impulsive: false,
    impulsiveText: '',
    nervous: false,
    nervousText: '',
    childRiskNotes: '',
  }


  render() {
    return (
      <div className="note-half">
        <h2>Child Risk Factors Observed</h2>
        <div className="line">
          <input type="checkbox" name="anger" onChange={this.props.handleCheckboxChange} />
          Aggressive Anger Problems
          <textarea
            wrap="soft"
            className="factor-details"
            name="angerText"
            onChange={this.props.handleTextboxChange} />
        </div>
        <div className="line">
          <input type="checkbox" name="withdrawal" onChange={this.props.handleCheckboxChange} />
          Social Withdrawal
          <textarea
            wrap="soft"
            className="factor-details"
            name="withdrawalText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="esteem" onChange={this.props.handleCheckboxChange} />
          Low Self-Esteem
          <textarea
            wrap="soft"
            className="factor-details"
            name="esteemText"
            onChange={this.props.handleTextboxChange} />
        </div>
        <div className="line">
          <input type="checkbox" name="attendance" onChange={this.props.handleCheckboxChange} />
          Poor School Attendance
          <textarea
            wrap="soft"
            className="factor-details"
            name="attendanceText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="performance" onChange={this.props.handleCheckboxChange} />
          Poor Work Habits/Performance
          <textarea
            wrap="soft"
            className="factor-details"
            name="performanceText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="peerRelationships" onChange={this.props.handleCheckboxChange} />
          Poor Peer Relationships
          <textarea
            wrap="soft"
            className="factor-details"
            name="peerRelationshipsText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="adultRelationships" onChange={this.props.handleCheckboxChange} />
          Poor Adult Relationships
          <textarea
            wrap="soft"
            className="factor-details"
            name="adultRelationshipsText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="hygiene" onChange={this.props.handleCheckboxChange} />
          Poor Hygiene/Health Concerns
          <textarea
            wrap="soft"
            className="factor-details"
            name="hygieneText"
            onChange={this.props.handleTextboxChange} />
        </div>
        <div className="line">
          <input type="checkbox" name="sexBehavior" onChange={this.props.handleCheckboxChange} />
          Sexualized Behavior
          <textarea
            wrap="soft"
            className="factor-details"
            name="sexBehaviorText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="frustrated" onChange={this.props.handleCheckboxChange} />
          Easily Frustrated/Poor Problem Solving
          <textarea
            wrap="soft"
            className="factor-details"
            name="frustratedText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="depression" onChange={this.props.handleCheckboxChange} />
          Depression/Sadness/Grief
          <textarea
            wrap="soft"
            className="factor-details"
            name="depressionText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="cries" onChange={this.props.handleCheckboxChange} />
          Cries Easily/Often
          <textarea
            wrap="soft"
            className="factor-details"
            name="criesText"
            onChange={this.props.handleTextboxChange} />
        </div>
        <div className="line">
          <input type="checkbox" name="impulsive" onChange={this.props.handleCheckboxChange} />
          Poor Impulse Control/Inattentive
          <textarea
            wrap="soft"
            className="factor-details"
            name="impulsiveText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="nervous" onChange={this.props.handleCheckboxChange} />
          Nervous Habits
          <textarea
            wrap="soft"
            className="factor-details"
            name="nervousText"
            onChange={this.props.handleTextboxChange} />
        </div>
        <div className="line">
          Notes:
          <textarea
            className="notes-box"
            name="childRiskNotes"
            onChange={this.props.handleTextboxChange} />
        </div>
      </div>
    );
  }
}

const mapState = state => ({ state })

export default connect(mapState, null)(ChildRisk);
