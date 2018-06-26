import React from 'react';

const ScoringScope = props => {

  return (
    <div>
      {/* SCOPE QUESTIONNAIRE */}
      <h2 className="section-header" id="scoring-header" > Scope Questionnaire</h2 >
      <div className="score-section" id="score">
        <div className="scope">
          <input type="checkbox" name="scope1" onChange={props.handleCheckboxChange} />
          1. One or more special and significant mental health needs appear to be present.
                <div className="scope-description">
            <p>
              a. Child is strongly suspected to have, or is diagnosed with, a developmental disability and either the level of training Friends receive is not sufficient to appropriately work with the child and/or the Friends of the Children program model seems inappropriate for working with the child.
                </p>
            <p>
              b. Child demonstrates behavior issues that are extreme, and the level of training Friends receive is not sufficient to keep the child, him/herself and/or others physically safe during one-on-one and other activities with a a Friend.
                </p>
            <p>
              c. Child is strongly suspected to have, or is diagnosed with, some other severe disorder, such as Pervasive Developmental Disorder, Fetal Alcohol Spectrum Disorder, Reactive Attachment Disorder, or a psychotic disorder, and the level of training Firends receive is not sufficient to appropriately work with the child and/or the Friends of the Children program model seems inappropriate for working with the child.
                </p>
          </div>
        </div>
        <div className="scope" id="scope-two">
          <input type="checkbox" name="scope2" onChange={props.handleCheckboxChange} />
          2. A special language needs is present, namely that the child does not speak English or he or she uses Spanish or American Sign Language exclusively, and no same sex Friends are available who speak Spanish or use American Sign Language.
              </div>
        <div className="scope" id="scope-selector">
          <select name="scopeSelector" onChange={props.handleTextboxChange}>
            <option value="Yes">Yes (NO items above are checked)</option>
            <option value="No">No (one or more items above are checked)</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ScoringScope;
