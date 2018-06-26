import React from 'react';

const ScoringNeed = props => {

  return (
    <div>
      {/* NEED QUESTIONNAIRE */}
      <h2 className="section-header" id="scoring-header">Need Questionnaire</h2>
      <div className="score-section" id="score">
        <div className="scope">
          Choose the statement that best estimates how effective the FOTC program is likely to be in terms of making a difference in the life of this child.
                <div id="need-selector">
            <select name="needSelector" onChange={props.handleTextboxChange}>
              <option value="0">The child will most likely succeed, and is not really in need of a Friend</option>
              <option value="1">The child will most likely succeed, but could be helped by a Friend</option>
              <option value="2">It is unclear if the child will succeed, and a Friend might make the difference</option>
              <option value="3">The child will most likely struggle to succeed, and a Friend is likely to help</option>
              <option value="4">The child will most likely struggle greatly to succeed, and has a great need for a Friend</option>
            </select>
          </div>
        </div>
        <div className="riskscore-div">
          <h1 className="risk-score">Score: {props.needScorer(props.needSelector)}</h1>
        </div>
      </div>
    </div>
  )
}

export default ScoringNeed;
