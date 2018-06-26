import React, { Component } from 'react';
import { connect } from 'react-redux';

class ScoringStrengths extends Component {
  state = {
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
    strengthScore: 100,
  }
  render() {

    console.log(this.props);
    return (
      <div>
        {/* STRENGTHS QUESTIONNAIRE */}
        <h2 className="section-header" id="scoring-header">Child Strengths</h2>
        <div className="score-section" id="score">
          <div className="score-line">
            <input type="checkbox" name="intelligent" onChange={this.props.handleCheckboxChange} />
            Appears Highly Intelligent
                  </div>
          <div className="score-line">
            <input type="checkbox" name="efficacy" onChange={this.props.handleCheckboxChange} />
            Demonstrates Self-Efficacy
                  </div>
          <div className="score-line">
            <input type="checkbox" name="protectEsteem" onChange={this.props.handleCheckboxChange} />
            Healthy Self Exteem
                  </div>
          <div className="score-line">
            <input type="checkbox" name="interpersonal" onChange={this.props.handleCheckboxChange} />
            Good Interpersonal Skills
                  </div>
          <div className="score-line">
            <input type="checkbox" name="initiative" onChange={this.props.handleCheckboxChange} />
            Takes Initiative
                  </div>
          <div className="score-line">
            <input type="checkbox" name="frustration" onChange={this.props.handleCheckboxChange} />
            Age-appropriate Frustration
                  </div>
          <div className="score-line">
            <input type="checkbox" name="soothe" onChange={this.props.handleCheckboxChange} />
            Ability to Self-soothe
                  </div>
          <div className="score-line">
            <input type="checkbox" name="help" onChange={this.props.handleCheckboxChange} />
            Seeks Help/Support
                  </div>
          <div className="score-line">
            <input type="checkbox" name="temperament" onChange={this.props.handleCheckboxChange} />
            Easy-Going Temperament
                  </div>
          <div className="score-line">
            <input type="checkbox" name="hope" onChange={this.props.handleCheckboxChange} />
            Has a Sense of Hope
                  </div>
          <div className="score-line">
            <input type="checkbox" name="trying" onChange={this.props.handleCheckboxChange} />
            Willing to Keep Trying
                  </div>
          <div className="score-line">
            <input type="checkbox" name="likesSchool" onChange={this.props.handleCheckboxChange} />
            Likes School/Wants to Be There
                  </div>
          <div className="score-line">
            <input type="checkbox" name="humor" onChange={this.props.handleCheckboxChange} />
            Has a Sense of Humor
                  </div>
          <div className="score-line">
            <input type="checkbox" name="goodCaregiver" onChange={this.props.handleCheckboxChange} />
            Good Relationship w/ 1+ Caregiver
                  </div>
          <div className="score-line">
            <input type="checkbox" name="supervision" onChange={this.props.handleCheckboxChange} />
            Family Monitors/Supervises Child
                  </div>
          <div className="score-line">
            <input type="checkbox" name="extended" onChange={this.props.handleCheckboxChange} />
            Extended Family Support
                  </div>
          <div className="score-line">
            <input type="checkbox" name="traditions" onChange={this.props.handleCheckboxChange} />
            Strong Positive Traditions
                  </div>
          <div className="score-line">
            <input type="checkbox" name="community" onChange={this.props.handleCheckboxChange} />
            Strong Community Ties
                  </div>
          <div className="score-line">
            <input type="checkbox" name="resources" onChange={this.props.handleCheckboxChange} />
            Access to Basic Resources
                  </div>
          <div className="score-line">
            <input type="checkbox" name="noFamilyStress" onChange={this.props.handleCheckboxChange} />
            Family Manages Stress Well
                  </div>
          <div className="score-line">
            <input type="checkbox" name="noFamilyViolence" onChange={this.props.handleCheckboxChange} />
            No Violence in Home
                  </div>
          <div className="score-line">
            <input type="checkbox" name="noSubstanceAbuse" onChange={this.props.handleCheckboxChange} />
            No Family History of Substance Abuse
                  </div>
          <div className="score-line">
            <input type="checkbox" name="consistentEmployment" onChange={this.props.handleCheckboxChange} />
            Caregivers Have Consistent Employment
                  </div>
          <div className="score-line">
            <input type="checkbox" name="valueEducation" onChange={this.props.handleCheckboxChange} />
            Family Values Education
                  </div>
          <div className="riskscore-div">
            <h1 className="risk-score">Score: {
              // this.props.strengthsCheckboxScorer({ traditions: true }, this.props.strengthsList)
              this.props.strengthsCheckboxScorer(this.state, this.props.strengthsList)
            }
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({ state })

// export default ScoringStrengths;
export default connect(mapState)(ScoringStrengths);
