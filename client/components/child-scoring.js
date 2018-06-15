import React, { Component } from 'react';
import { connect } from 'react-redux';


class ChildScoring extends Component {
  state = {
    school: '',
    childName: '',
    //child risk
    anger: false,
    withdrawal: false,
    esteem: false,
    attendance: false,
    performance: false,
    peerRelationships: false,
    adultRelationships: false,
    hygiene: false,
    sexBehavior: false,
    frustrated: false,
    depression: false,
    cries: false,
    impulsive: false,
    nervous: false,
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
    familyStress: false,
    familyViolence: false,
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
            <div className="score-section" id="risk-line">
              <div>
                <h2 className="section-header">Child Strengths</h2>
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
              </div>
            </div>
            <div className="risk-factors" id="risk-line">
            </div>
          </form>
        </div>
      </div >
    )
  }
}

const mapState = state => ({ state })
const mapDispatch = null;
export default connect(mapState, null)(ChildScoring);

