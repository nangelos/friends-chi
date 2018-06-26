import React from 'react';

const ScoringHeader = props => {
  return (
    <div className="topline">
      School Name:{' '}
      <input
        required={true}
        className="scoring-topline-input"
        type="text"
        name="school"
        placeholder="Enter School Name"
        onChange={props.handleTextboxChange}
      />
      Child Name:{' '}
      <input
        required={true}
        className="scoring-topline-input"
        type="text"
        name="childName"
        placeholder="Enter Child Name"
        onChange={props.handleTextboxChange}
      />
      <div className="questionnaire-line">
        Gender:
                <select name="gender" onChange={props.handleTextboxChange}>
          <option value="Boy">Boy</option>
          <option value="Girl">Girl</option>
        </select>
      </div>
      <h1 id="total-score">
        {props.finalScore(
          props.childName,
          props.scopeSelector,
          props.selectorScorer(props.friendList),
          props.selectorScorer(props.teacherList),
          props.riskCheckboxScorer(props.riskList),
          props.strengthsCheckboxScorer(props.strengthsList),
          props.needScorer(props.needSelector)
        )}
      </h1>
    </div>
  )
}

export default ScoringHeader
