import React from 'react'
import { selectOptions } from '../../constants'


const ScoringTeacher = (props) => {
  return (
    <div>
      {/* TEACHER QUESTIONNAIRE */}
      <h2 className="section-header" id="scoring-header">
        Teacher Questionnaire
            </h2>
      <div className="score-section" id="score">
        <div className="questionnaire-line">
          Aggressive Anger Problems
                <select name="teacherAnger" onChange={props.handleTextboxChange}>
            {selectOptions.map((option, i) =>
              <option key={option} value={i}>{option}</option>
            )}
          </select>
        </div>
        <div className="questionnaire-line">
          Social Withdrawal
                <select name="teacherWithdrawal" onChange={props.handleTextboxChange}>
            {selectOptions.map((option, i) =>
              <option key={option} value={i}>{option}</option>
            )}
          </select>
        </div>
        <div className="questionnaire-line">
          Low Self-Esteem
                <select name="teacherEsteem" onChange={props.handleTextboxChange}>
            {selectOptions.map((option, i) =>
              <option key={option} value={i}>{option}</option>
            )}
          </select>
        </div>
        <div className="questionnaire-line">
          Poor School Attendance
                <select name="teacherAttendance" onChange={props.handleTextboxChange}>
            {selectOptions.map((option, i) =>
              <option key={option} value={i}>{option}</option>
            )}
          </select>
        </div>
        <div className="questionnaire-line">
          Poor Work Habits/Performance
                <select name="teacherPerformance" onChange={props.handleTextboxChange}>
            {selectOptions.map((option, i) =>
              <option key={option} value={i}>{option}</option>
            )}
          </select>
        </div>
        <div className="questionnaire-line">
          Poor Peer Relationships
                <select name="teacherPeerRelationships" onChange={props.handleTextboxChange}>
            {selectOptions.map((option, i) =>
              <option key={option} value={i}>{option}</option>
            )}
          </select>
        </div>
        <div className="questionnaire-line">
          Poor Adult Relationships
                <select name="teacherAdultRelationships" onChange={props.handleTextboxChange}>
            {selectOptions.map((option, i) =>
              <option key={option} value={i}>{option}</option>
            )}
          </select>
        </div>
        <div className="questionnaire-line">
          Poor Hygiene/Health Concerns
                <select name="teacherHygiene" onChange={props.handleTextboxChange}>
            {selectOptions.map((option, i) =>
              <option key={option} value={i}>{option}</option>
            )}
          </select>
        </div>
        <div className="questionnaire-line">
          Sexualized Behavior
                <select name="teacherSexBehavior" onChange={props.handleTextboxChange}>
            {selectOptions.map((option, i) =>
              <option key={option} value={i}>{option}</option>
            )}
          </select>
        </div>
        <div className="questionnaire-line">
          Easily Frustrated/Poor Problem Solving
                <select name="teacherFrustrated" onChange={props.handleTextboxChange}>
            {selectOptions.map((option, i) =>
              <option key={option} value={i}>{option}</option>
            )}
          </select>
        </div>
        <div className="questionnaire-line">
          Depression/Sadness/Grief
                <select name="teacherDepression" onChange={props.handleTextboxChange}>
            {selectOptions.map((option, i) =>
              <option key={option} value={i}>{option}</option>
            )}
          </select>
        </div>
        <div className="questionnaire-line">
          Cries Easily/Often
                <select name="teacherCries" onChange={props.handleTextboxChange}>
            {selectOptions.map((option, i) =>
              <option key={option} value={i}>{option}</option>
            )}
          </select>
        </div>
        <div className="questionnaire-line">
          Poor Impulse Control/Inattentive
                <select name="teacherImpulsive" onChange={props.handleTextboxChange}>
            {selectOptions.map((option, i) =>
              <option key={option} value={i}>{option}</option>
            )}
          </select>
        </div>
        <div className="questionnaire-line">
          Nervous Habits
                <select name="teacherNervous" onChange={props.handleTextboxChange}>
            {selectOptions.map((option, i) =>
              <option key={option} value={i}>{option}</option>
            )}
          </select>
        </div>
        <h1 className="score-display">
          Score: {props.selectorScorer(props.teacherList)}
        </h1>
      </div>
    </div>
  )
}

export default ScoringTeacher;
