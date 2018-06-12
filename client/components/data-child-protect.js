import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChildProtect extends Component {
  state = {
    intelligent: false,
    intelligentText: '',
    efficacy: false,
    efficacyText: '',
    protectEsteem: false,
    protectEsteemText: '',
    interpersonal: false,
    interpersonalText: '',
    initiative: false,
    initiativeText: '',
    frustration: false,
    frustrationText: '',
    soothe: false,
    sootheText: '',
    help: false,
    helpText: '',
    temperament: false,
    temperamentText: '',
    hope: false,
    hopeText: '',
    trying: false,
    tryingText: '',
    likesSchool: false,
    likesSchoolText: '',
    humor: false,
    humorText: '',
    childProtectNotes: '',
  }

  render() {
    return (
      <div>
        <h2>Child Protective Factors Observed</h2>
        <div className="line">
          <input type="checkbox" name="intelligent" onChange={this.props.handleCheckboxChange} />
          Appears Highly Intelligent
          <textarea
            wrap="soft"
            className="factor-details"
            name="intelligentText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="efficacy" onChange={this.props.handleCheckboxChange} />
          Demonstrates Self-Efficacy
          <textarea
            wrap="soft"
            className="factor-details"
            name="efficacyText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="protectEsteem" onChange={this.props.handleCheckboxChange} />
          Healthy Self Exteem
          <textarea
            wrap="soft"
            className="factor-details"
            name="protectEsteemText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="interpersonal" onChange={this.props.handleCheckboxChange} />
          Good Interpersonal Skills
          <textarea
            wrap="soft"
            className="factor-details"
            name="interpersonalText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="initiative" onChange={this.props.handleCheckboxChange} />
          Takes Initiative
          <textarea
            wrap="soft"
            className="factor-details"
            name="initiativeText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="frustration" onChange={this.props.handleCheckboxChange} />
          Age-appropriate Frustration
          <textarea
            wrap="soft"
            className="factor-details"
            name="frustrationText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="soothe" onChange={this.props.handleCheckboxChange} />
          Ability to Self-soothe
          <textarea
            wrap="soft"
            className="factor-details"
            name="sootheText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="help" onChange={this.props.handleCheckboxChange} />
          Seeks Help/Support
          <textarea
            wrap="soft"
            className="factor-details"
            name="helpText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="temperament" onChange={this.props.handleCheckboxChange} />
          Easy-Going Temperament
          <textarea
            wrap="soft"
            className="factor-details"
            name="temperamentText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="hope" onChange={this.props.handleCheckboxChange} />
          Has a Sense of Hope
          <textarea
            wrap="soft"
            className="factor-details"
            name="hopeText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="trying" onChange={this.props.handleCheckboxChange} />
          Willing to Keep Trying
          <textarea
            wrap="soft"
            className="factor-details"
            name="tryingText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="likesSchool" onChange={this.props.handleCheckboxChange} />
          Likes School/Wants to Be There
          <textarea
            wrap="soft"
            className="factor-details"
            name="likesSchoolText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          <input type="checkbox" name="humor" onChange={this.props.handleCheckboxChange} />
          Has a Sense of Humor
          <textarea
            wrap="soft"
            className="factor-details"
            name="humorText"
            onChange={this.props.handleTextboxChange}
          />
        </div>
        <div className="line">
          Notes:
          <textarea
            className="notes-box"
            name="childProtectNotes"
            id="notes-one"
            onChange={this.props.handleTextboxChange}
          />
        </div>
      </div>
    );
  }
}

const mapState = state => ({ state })

export default connect(mapState, null)(ChildProtect);
