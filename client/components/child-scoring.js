import React, { Component } from 'react';
import { connect } from 'react-redux';


class ChildScoring extends Component {
  state = {
    school: '',
    childName: '',
    //friend questionnaire
    friendAnger: 0,
    friendWithdrawal: 0,
    friendEsteem: 0,
    friendAttendance: 0,
    friendPerformance: 0,
    friendPeerRelationships: 0,
    friendAdultRelationships: 0,
    friendHygiene: 0,
    friendSexBehavior: 0,
    friendFrustrated: 0,
    friendDepression: 0,
    friendCries: 0,
    friendImpulsive: 0,
    friendNervous: 0,
    //teacher questionnaire
    teacherAnger: 0,
    teacherWithdrawal: 0,
    teacherEsteem: 0,
    teacherAttendance: 0,
    teacherPerformance: 0,
    teacherPeerRelationships: 0,
    teacherAdultRelationships: 0,
    teacherHygiene: 0,
    teacherSexBehavior: 0,
    teacherFrustrated: 0,
    teacherDepression: 0,
    teacherCries: 0,
    teacherImpulsive: 0,
    teacherNervous: 0,
    //environment risk
    singleParent: false,
    poverty: false,
    teenParent: false,
    neglect: false,
    abuse: false,
    foster: false,
    drugs: false,
    substance: false,
    violence: false,
    conflict: false,
    criminal: false,
    incarceration: false,
    criminalHome: false,
    gang: false,
    mentalIll: false,
    relocation: false,
    education: false,
    sibling: false,
    neighborhood: false,
    delinquentPeers: false,
    monitoring: false,
    //child strengths
    intelligent: false,
    efficacy: false,
    protectEsteem: false,
    interpersonal: false,
    initiative: false,
    frustration: false,
    soothe: false,
    help: false,
    temperament: false,
    hope: false,
    trying: false,
    likesSchool: false,
    humor: false,
    //environment strengths
    goodCaregiver: false,
    supervision: false,
    extended: false,
    traditions: false,
    community: false,
    resources: false,
    noFamilyStress: false,
    noFamilyViolence: false,
    noSubstanceAbuse: false,
    consistentEmployment: false,
    valueEducation: false,
  }

  handleCheckboxChange = evt => {
    let { name } = evt.target
    this.setState({ [name]: !this.state[name] })
  }

  handleTextboxChange = (evt) => {
    let { name, value } = evt.target
    this.setState({ [name]: value.toUpperCase() })
    console.log(this.state[name])
  }

  handleSubmit = evt => {
    evt.preventDefault();
    console.log('submitting to Scoring Database');
  }

  render() {
    return (
      <div>
        <h1 className="section-header">Final Scoring for Child </h1>
        <div>
          <form>
            <div className="topline">
              School Name: <input
                type="text"
                name="school"
                placeholder="Enter School Name"
                onChange={this.handleTextboxChange} />
              Child Name: <input
                type="text"
                name="childName"
                placeholder="Enter Child Name"
                onChange={this.handleTextboxChange} />
            </div>
            {/* FRIEND QUESTIONNAIRE */}
            <h2 className="section-header" id="scoring-header">Friend Questionnaire</h2>
            <div className="score-section" id="score">
              <div className="questionnaire-line">
                Aggressive Anger Problems
                <select name="friendAnger" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Social Withdrawal
                <select name="friendWithdrawal" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Low Self-Esteem
                <select name="friendEsteem" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor School Attendance
                <select name="friendAttendance" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Work Habits/Performance
                <select name="friendPerformance" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Peer Relationships
                <select name="friendPeerRelationships" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Adult Relationships
                <select name="friendAdultRelationships" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Hygiene/Health Concerns
                <select name="friendHygiene" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Sexualized Behavior
                <select name="friendSexBehavior" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Easily Frustrated/Poor Problem Solving
                <select name="friendFrustrated" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Depression/Sadness/Grief
                <select name="friendDepression" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Cries Easily/Often
                <select name="friendCries" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Impulse Control/Inattentive
                <select name="friendImpulsive" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Nervous Habits
                <select name="friendNervous" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
            </div>
            {/* TEACHER QUESTIONNAIRE */}
            <h2 className="section-header" id="scoring-header">Teacher Questionnaire</h2>
            <div className="score-section" id="score">
              <div className="questionnaire-line">
                Aggressive Anger Problems
                <select name="teacherAnger" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Social Withdrawal
                <select name="teacherWithdrawal" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Low Self-Esteem
                <select name="teacherEsteem" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor School Attendance
                <select name="teacherAttendance" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Work Habits/Performance
                <select name="teacherPerformance" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Peer Relationships
                <select name="teacherPeerRelationships" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Adult Relationships
                <select name="teacherAdultRelationships" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Hygiene/Health Concerns
                <select name="teacherHygiene" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Sexualized Behavior
                <select name="teacherSexBehavior" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Easily Frustrated/Poor Problem Solving
                <select name="teacherFrustrated" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Depression/Sadness/Grief
                <select name="teacherDepression" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Cries Easily/Often
                <select name="teacherCries" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Impulse Control/Inattentive
                <select name="teacherImpulsive" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Nervous Habits
                <select name="teacherNervous" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
            </div>
            {/* ENVIRONMENTAL QUESTIONNAIRE */}
            <h2 className="section-header" id="scoring-header">Environmental Risks</h2>
            <div className="score-section" id="score">
              <div className="score-line">
                <input type="checkbox" name="singleParent" onChange={this.handleCheckboxChange} />
                Single Parent Family
                </div>
              <div className="score-line">
                <input type="checkbox" name="poverty" onChange={this.handleCheckboxChange} />
                Living in Poverty
                </div>
              <div className="score-line">
                <input type="checkbox" name="teenParent" onChange={this.handleCheckboxChange} />
                Parent Was a Teen Parent
                </div>
              <div className="score-line">
                <input type="checkbox" name="neglect" onChange={this.handleCheckboxChange} />
                History of Neglect
                </div>
              <div className="score-line">
                <input type="checkbox" name="abuse" onChange={this.handleCheckboxChange} />
                Physical/Sexual Abuse
                </div>
              <div className="score-line">
                <input type="checkbox" name="foster" onChange={this.handleCheckboxChange} />
                In Foster Care
                </div>
              <div className="score-line">
                <input type="checkbox" name="drugs" onChange={this.handleCheckboxChange} />
                Family History of Drug/Alcohol Abuse
                </div>
              <div className="score-line">
                <input type="checkbox" name="substance" onChange={this.handleCheckboxChange} />
                Substance Abuse in Home
                </div>
              <div className="score-line">
                <input type="checkbox" name="violence" onChange={this.handleCheckboxChange} />
                Domestic Violence in Home
                </div>
              <div className="score-line">
                <input type="checkbox" name="conflict" onChange={this.handleCheckboxChange} />
                Ongoing Family Conflict
                </div>
              <div className="score-line">
                <input type="checkbox" name="criminal" onChange={this.handleCheckboxChange} />
                Parent Criminal History
                </div>
              <div className="score-line">
                <input type="checkbox" name="incarcerated" onChange={this.handleCheckboxChange} />
                Parent Incarcerated (past/present)
                </div>
              <div className="score-line">
                <input type="checkbox" name="criminalHome" onChange={this.handleCheckboxChange} />
                Criminal Activity in Home
                </div>
              <div className="score-line">
                <input type="checkbox" name="gang" onChange={this.handleCheckboxChange} />
                Family Gang Activity
                </div>
              <div className="score-line">
                <input type="checkbox" name="mentalIll" onChange={this.handleCheckboxChange} />
                Parent with Mental Illness
                </div>
              <div className="score-line">
                <input type="checkbox" name="relocation" onChange={this.handleCheckboxChange} />
                Frequest Relocation/Unstable Living
                </div>
              <div className="score-line">
                <input type="checkbox" name="education" onChange={this.handleCheckboxChange} />
                Low Value on Education
                </div>
              <div className="score-line">
                <input type="checkbox" name="sibling" onChange={this.handleCheckboxChange} />
                Older Sibling with High-Risk Behavior
                </div>
              <div className="score-line">
                <input type="checkbox" name="neighborhood" onChange={this.handleCheckboxChange} />
                High Crime/Violent Neighborhood
                </div>
              <div className="score-line">
                <input type="checkbox" name="delinquentPeers" onChange={this.handleCheckboxChange} />
                Exposure to Delinquent Peers
                </div>
              <div className="score-line">
                <input type="checkbox" name="monitoring" onChange={this.handleCheckboxChange} />
                Lack of Parental Monitoring
                </div>
            </div>
            {/* STRENGTHS QUESTIONNAIRE */}
            <h2 className="section-header" id="scoring-header">Child Strengths</h2>
            <div className="score-section" id="score">
              <div className="score-line">
                <input type="checkbox" name="intelligent" onChange={this.handleCheckboxChange} />
                Appears Highly Intelligent
                </div>
              <div className="score-line">
                <input type="checkbox" name="efficacy" onChange={this.handleCheckboxChange} />
                Demonstrates Self-Efficacy
                </div>
              <div className="score-line">
                <input type="checkbox" name="protectEsteem" onChange={this.handleCheckboxChange} />
                Healthy Self Exteem
                </div>
              <div className="score-line">
                <input type="checkbox" name="interpersonal" onChange={this.handleCheckboxChange} />
                Good Interpersonal Skills
                </div>
              <div className="score-line">
                <input type="checkbox" name="initiative" onChange={this.handleCheckboxChange} />
                Takes Initiative
                </div>
              <div className="score-line">
                <input type="checkbox" name="frustration" onChange={this.handleCheckboxChange} />
                Age-appropriate Frustration
                </div>
              <div className="score-line">
                <input type="checkbox" name="soothe" onChange={this.handleCheckboxChange} />
                Ability to Self-soothe
                </div>
              <div className="score-line">
                <input type="checkbox" name="help" onChange={this.handleCheckboxChange} />
                Seeks Help/Support
                </div>
              <div className="score-line">
                <input type="checkbox" name="temperament" onChange={this.handleCheckboxChange} />
                Easy-Going Temperament
                </div>
              <div className="score-line">
                <input type="checkbox" name="hope" onChange={this.handleCheckboxChange} />
                Has a Sense of Hope
                </div>
              <div className="score-line">
                <input type="checkbox" name="trying" onChange={this.handleCheckboxChange} />
                Willing to Keep Trying
                </div>
              <div className="score-line">
                <input type="checkbox" name="likesSchool" onChange={this.handleCheckboxChange} />
                Likes School/Wants to Be There
                </div>
              <div className="score-line">
                <input type="checkbox" name="humor" onChange={this.handleCheckboxChange} />
                Has a Sense of Humor
                </div>
              <div className="score-line">
                <input type="checkbox" name="goodCaregiver" onChange={this.handleCheckboxChange} />
                Good Relationship w/ 1+ Caregiver
                </div>
              <div className="score-line">
                <input type="checkbox" name="supervision" onChange={this.handleCheckboxChange} />
                Family Monitors/Supervises Child
                </div>
              <div className="score-line">
                <input type="checkbox" name="extended" onChange={this.handleCheckboxChange} />
                Extended Family Support
                </div>
              <div className="score-line">
                <input type="checkbox" name="traditions" onChange={this.handleCheckboxChange} />
                Strong Positive Traditions
                </div>
              <div className="score-line">
                <input type="checkbox" name="community" onChange={this.handleCheckboxChange} />
                Strong Community Ties
                </div>
              <div className="score-line">
                <input type="checkbox" name="resources" onChange={this.handleCheckboxChange} />
                Access to Basic Resources
                </div>
              <div className="score-line">
                <input type="checkbox" name="noFamilyStress" onChange={this.handleCheckboxChange} />
                Family Manages Stress Well
                </div>
              <div className="score-line">
                <input type="checkbox" name="noFamilyViolence" onChange={this.handleCheckboxChange} />
                No Violence in Home
                </div>
              <div className="score-line">
                <input type="checkbox" name="noSubstanceAbuse" onChange={this.handleCheckboxChange} />
                No Family History of Substance Abuse
                </div>
              <div className="score-line">
                <input type="checkbox" name="consistentEmployment" onChange={this.handleCheckboxChange} />
                Caregivers Have Consistent Employment
                </div>
              <div className="score-line">
                <input type="checkbox" name="valueEducation" onChange={this.handleCheckboxChange} />
                Family Values Education
                </div>
            </div>
            <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
          </form>
        </div>
      </div >
    )
  }
}

const mapState = state => ({ state })
const mapDispatch = null;
export default connect(mapState, null)(ChildScoring);

