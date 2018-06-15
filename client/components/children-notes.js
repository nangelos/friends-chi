import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllData, fetchSelectData } from '../store';
import { ChildRisk, EnvRisk, ChildProtect, EnvProtect } from './index';


class ChildNotes extends Component {

  componentDidMount() {
    const { getChildData } = this.props;
    const { pathname } = this.props.location;
    getChildData(pathname.slice(10))
  }

  getTrue = (obj) => {
    return Object.keys(obj)
      .filter(key => obj[key] === true)
  }

  render() {
    console.log(this.props);
    const childData = this.props.state.data.selectedData;
    console.log(childData);
    return (
      <div>
        <h1>Here are the child notes</h1>
        <div>
          {
            childData &&
            <div>
              <div className="topline">
                Date: <input type="date" name="date" value={childData.date} />
                School: <input type="text" name="school" value={childData.school} />
                Observer Name: <input type="text" name="observer" value={childData.observer} />
                Child Initials: <input type="text" name="childInitials" value={childData.childInitials} />
              </div>
              <div className="risk-factors" id="risk-line">
                <div>
                  <h2>Child Risk Factors Observed</h2>
                  <div className="line">
                    <input type="checkbox" name="anger" checked={childData.anger} />
                    Aggressive Anger Problems
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="angerText"
                      value={childData.angerText} />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="withdrawal" checked={childData.withdrawal} />
                    Social Withdrawal
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="withdrawalText"
                      value={childData.withdrawalText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="esteem" checked={childData.esteem} />
                    Low Self-Esteem
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="esteemText"
                      value={childData.esteemText} />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="attendance" checked={childData.attendance} />
                    Poor School Attendance
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="attendanceText"
                      value={childData.attendanceText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="performance" checked={childData.performance} />
                    Poor Work Habits/Performance
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="performanceText"
                      value={childData.performanceText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="peerRelationships" checked={childData.peerRelationships} />
                    Poor Peer Relationships
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="peerRelationshipsText"
                      value={childData.peerRelationshipsText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="adultRelationships" checked={childData.adultRelationships} />
                    Poor Adult Relationships
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="adultRelationshipsText"
                      value={childData.adultRelationshipsText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="hygiene" checked={childData.hygiene} />
                    Poor Hygiene/Health Concerns
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="hygieneText"
                      value={childData.hygieneText} />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="sexBehavior" checked={childData.sexBehavior} />
                    Sexualized Behavior
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="sexBehaviorText"
                      value={childData.sexBehaviorText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="frustrated" checked={childData.frustrated} />
                    Easily Frustrated/Poor Problem Solving
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="frustratedText"
                      value={childData.frustratedText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="depression" checked={childData.depression} />
                    Depression/Sadness/Grief
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="depressionText"
                      value={childData.depressionText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="cries" checked={childData.cries} />
                    Cries Easily/Often
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="criesText"
                      value={childData.criesText} />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="impulsive" checked={childData.impulsive} />
                    Poor Impulse Control/Inattentive
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="impulsiveText"
                      value={childData.impulsiveText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="nervous" checked={childData.nervous} />
                    Nervous Habits
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="nervousText"
                      value={childData.nervousText} />
                  </div>
                  <div className="line">
                    Notes:
          <textarea
                      className="notes-box"
                      name="childRiskNotes"
                      value={childData.childRiskNotes} />
                  </div>
                </div>
                <EnvRisk />
              </div>
              <div className="risk-factors" id="protective-line">
                <ChildProtect />
                <EnvProtect />
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

const mapState = state => ({ state });
const mapDispatch = dispatch => {
  return {
    getChildData: (name) => dispatch(fetchSelectData(name))
  }
}
export default connect(mapState, mapDispatch)(ChildNotes);
