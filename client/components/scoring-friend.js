import React, { Component } from 'react'
// import { connect } from 'react-redux'

const ScoringFriend = (props) => {
  return (
    <div>
      {/* FRIEND QUESTIONNAIRE */}
      <h2 className="section-header" id="scoring-header">
        Friend Questionnaire
        </h2>
      <div className="score-section" id="score">
        <div className="questionnaire-line">
          Aggressive Anger Problems
            <select name="friendAnger" onChange={props.handleTextboxChange}>
            <option value="0">Behavior Absent</option>
            <option value="1">Not a Problem</option>
            <option value="2">Mild Problem</option>
            <option value="3">Moderate Problem</option>
            <option value="4">Severe Problem</option>
          </select>
        </div>
        <div className="questionnaire-line">
          Social Withdrawal
            <select name="friendWithdrawal" onChange={props.handleTextboxChange}>
            <option value="0">Behavior Absent</option>
            <option value="1">Not a Problem</option>
            <option value="2">Mild Problem</option>
            <option value="3">Moderate Problem</option>
            <option value="4">Severe Problem</option>
          </select>
        </div>
        <div className="questionnaire-line">
          Low Self-Esteem
            <select name="friendEsteem" onChange={props.handleTextboxChange}>
            <option value="0">Behavior Absent</option>
            <option value="1">Not a Problem</option>
            <option value="2">Mild Problem</option>
            <option value="3">Moderate Problem</option>
            <option value="4">Severe Problem</option>
          </select>
        </div>
        <div className="questionnaire-line">
          Poor School Attendance
            <select name="friendAttendance" onChange={props.handleTextboxChange}>
            <option value="0">Behavior Absent</option>
            <option value="1">Not a Problem</option>
            <option value="2">Mild Problem</option>
            <option value="3">Moderate Problem</option>
            <option value="4">Severe Problem</option>
          </select>
        </div>
        <div className="questionnaire-line">
          Poor Work Habits/Performance
            <select name="friendPerformance" onChange={props.handleTextboxChange}>
            <option value="0">Behavior Absent</option>
            <option value="1">Not a Problem</option>
            <option value="2">Mild Problem</option>
            <option value="3">Moderate Problem</option>
            <option value="4">Severe Problem</option>
          </select>
        </div>
        <div className="questionnaire-line">
          Poor Peer Relationships
            <select name="friendPeerRelationships" onChange={props.handleTextboxChange}>
            <option value="0">Behavior Absent</option>
            <option value="1">Not a Problem</option>
            <option value="2">Mild Problem</option>
            <option value="3">Moderate Problem</option>
            <option value="4">Severe Problem</option>
          </select>
        </div>
        <div className="questionnaire-line">
          Poor Adult Relationships
            <select name="friendAdultRelationships" onChange={props.handleTextboxChange}>
            <option value="0">Behavior Absent</option>
            <option value="1">Not a Problem</option>
            <option value="2">Mild Problem</option>
            <option value="3">Moderate Problem</option>
            <option value="4">Severe Problem</option>
          </select>
        </div>
        <div className="questionnaire-line">
          Poor Hygiene/Health Concerns
            <select name="friendHygiene" onChange={props.handleTextboxChange}>
            <option value="0">Behavior Absent</option>
            <option value="1">Not a Problem</option>
            <option value="2">Mild Problem</option>
            <option value="3">Moderate Problem</option>
            <option value="4">Severe Problem</option>
          </select>
        </div>
        <div className="questionnaire-line">
          Sexualized Behavior
            <select name="friendSexBehavior" onChange={props.handleTextboxChange}>
            <option value="0">Behavior Absent</option>
            <option value="1">Not a Problem</option>
            <option value="2">Mild Problem</option>
            <option value="3">Moderate Problem</option>
            <option value="4">Severe Problem</option>
          </select>
        </div>
        <div className="questionnaire-line">
          Easily Frustrated/Poor Problem Solving
            <select name="friendFrustrated" onChange={props.handleTextboxChange}>
            <option value="0">Behavior Absent</option>
            <option value="1">Not a Problem</option>
            <option value="2">Mild Problem</option>
            <option value="3">Moderate Problem</option>
            <option value="4">Severe Problem</option>
          </select>
        </div>
        <div className="questionnaire-line">
          Depression/Sadness/Grief
            <select name="friendDepression" onChange={props.handleTextboxChange}>
            <option value="0">Behavior Absent</option>
            <option value="1">Not a Problem</option>
            <option value="2">Mild Problem</option>
            <option value="3">Moderate Problem</option>
            <option value="4">Severe Problem</option>
          </select>
        </div>
        <div className="questionnaire-line">
          Cries Easily/Often
            <select name="friendCries" onChange={props.handleTextboxChange}>
            <option value="0">Behavior Absent</option>
            <option value="1">Not a Problem</option>
            <option value="2">Mild Problem</option>
            <option value="3">Moderate Problem</option>
            <option value="4">Severe Problem</option>
          </select>
        </div>
        <div className="questionnaire-line">
          Poor Impulse Control/Inattentive
            <select name="friendImpulsive" onChange={props.handleTextboxChange}>
            <option value="0">Behavior Absent</option>
            <option value="1">Not a Problem</option>
            <option value="2">Mild Problem</option>
            <option value="3">Moderate Problem</option>
            <option value="4">Severe Problem</option>
          </select>
        </div>
        <div className="questionnaire-line">
          Nervous Habits
            <select name="friendNervous" onChange={props.handleTextboxChange}>
            <option value="0">Behavior Absent</option>
            <option value="1">Not a Problem</option>
            <option value="2">Mild Problem</option>
            <option value="3">Moderate Problem</option>
            <option value="4">Severe Problem</option>
          </select>
        </div>
        <h1 className="score-display">
          Score: {props.selectorScorer(props.friendList)}
        </h1>
      </div>
    </div>
  )
}

// const mapState = state => {
//   console.log(state)
//   return {
//     state
//   }
// }

// export default connect(mapState)(ScoringFriend)
export default ScoringFriend;
