import React from 'react';

const ScoringStrengths = props => {

  return (
    <div>
      {/* STRENGTHS QUESTIONNAIRE */}
      <h2 className="section-header" id="scoring-header">Child Strengths</h2>
      <div className="score-section" id="score">
        <div className="score-line">
          <input type="checkbox" name="intelligent" onChange={props.handleCheckboxChange} />
          Appears Highly Intelligent
                  </div>
        <div className="score-line">
          <input type="checkbox" name="efficacy" onChange={props.handleCheckboxChange} />
          Demonstrates Self-Efficacy
                  </div>
        <div className="score-line">
          <input type="checkbox" name="protectEsteem" onChange={props.handleCheckboxChange} />
          Healthy Self Exteem
                  </div>
        <div className="score-line">
          <input type="checkbox" name="interpersonal" onChange={props.handleCheckboxChange} />
          Good Interpersonal Skills
                  </div>
        <div className="score-line">
          <input type="checkbox" name="initiative" onChange={props.handleCheckboxChange} />
          Takes Initiative
                  </div>
        <div className="score-line">
          <input type="checkbox" name="frustration" onChange={props.handleCheckboxChange} />
          Age-appropriate Frustration
                  </div>
        <div className="score-line">
          <input type="checkbox" name="soothe" onChange={props.handleCheckboxChange} />
          Ability to Self-soothe
                  </div>
        <div className="score-line">
          <input type="checkbox" name="help" onChange={props.handleCheckboxChange} />
          Seeks Help/Support
                  </div>
        <div className="score-line">
          <input type="checkbox" name="temperament" onChange={props.handleCheckboxChange} />
          Easy-Going Temperament
                  </div>
        <div className="score-line">
          <input type="checkbox" name="hope" onChange={props.handleCheckboxChange} />
          Has a Sense of Hope
                  </div>
        <div className="score-line">
          <input type="checkbox" name="trying" onChange={props.handleCheckboxChange} />
          Willing to Keep Trying
                  </div>
        <div className="score-line">
          <input type="checkbox" name="likesSchool" onChange={props.handleCheckboxChange} />
          Likes School/Wants to Be There
                  </div>
        <div className="score-line">
          <input type="checkbox" name="humor" onChange={props.handleCheckboxChange} />
          Has a Sense of Humor
                  </div>
        <div className="score-line">
          <input type="checkbox" name="goodCaregiver" onChange={props.handleCheckboxChange} />
          Good Relationship w/ 1+ Caregiver
                  </div>
        <div className="score-line">
          <input type="checkbox" name="supervision" onChange={props.handleCheckboxChange} />
          Family Monitors/Supervises Child
                  </div>
        <div className="score-line">
          <input type="checkbox" name="extended" onChange={props.handleCheckboxChange} />
          Extended Family Support
                  </div>
        <div className="score-line">
          <input type="checkbox" name="traditions" onChange={props.handleCheckboxChange} />
          Strong Positive Traditions
                  </div>
        <div className="score-line">
          <input type="checkbox" name="community" onChange={props.handleCheckboxChange} />
          Strong Community Ties
                  </div>
        <div className="score-line">
          <input type="checkbox" name="resources" onChange={props.handleCheckboxChange} />
          Access to Basic Resources
                  </div>
        <div className="score-line">
          <input type="checkbox" name="noFamilyStress" onChange={props.handleCheckboxChange} />
          Family Manages Stress Well
                  </div>
        <div className="score-line">
          <input type="checkbox" name="noFamilyViolence" onChange={props.handleCheckboxChange} />
          No Violence in Home
                  </div>
        <div className="score-line">
          <input type="checkbox" name="noSubstanceAbuse" onChange={props.handleCheckboxChange} />
          No Family History of Substance Abuse
                  </div>
        <div className="score-line">
          <input type="checkbox" name="consistentEmployment" onChange={props.handleCheckboxChange} />
          Caregivers Have Consistent Employment
                  </div>
        <div className="score-line">
          <input type="checkbox" name="valueEducation" onChange={props.handleCheckboxChange} />
          Family Values Education
                  </div>
        <div className="riskscore-div">
          <h1 className="risk-score">Score: {
            props.strengthsCheckboxScorer(props.strengthsList)
          }
          </h1>
        </div>
      </div>
    </div>
  )
}


export default ScoringStrengths;
