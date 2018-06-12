import React, { Component } from 'react';
import { connect } from 'react-redux';

class EnvRisk extends Component {
  constructor() {
    super()
    this.state = {
      singleParent: false,
      singleParentText: '',
      poverty: false,
      povertyText: '',
      teenParent: false,
      teenParentText: '',
      neglect: false,
      neglectText: '',
      abuse: false,
      abuseText: '',
      foster: false,
      fosterText: '',
      drugs: false,
      drugsText: '',
      substance: false,
      substanceText: '',
      violence: false,
      violenceText: '',
      conflict: false,
      conflictText: '',
      criminal: false,
      criminalText: '',
      incarceration: false,
      incarcerationText: '',
      criminalHome: false,
      criminalHomeText: '',
      gang: false,
      gangText: '',
      mentalIll: false,
      mentalIllText: '',
      relocation: false,
      relocationText: '',
      education: false,
      educationText: '',
      sibling: false,
      siblingText: '',
      neighborhood: false,
      neighborhoodText: '',
      delinquentPeers: false,
      delinquentPeersText: '',
      monitoring: false,
      monitoringText: ''
    }
  }


  render() {
    return (
      <div>
        <h2>Environment Risk Factors Observed</h2>
        <div>
          <div className="line">
            <input type="checkbox" name="singleParent" onChange={this.props.handleCheckboxChange} />
            Single Parent Family
          <textarea
              wrap="soft"
              className="factor-details"
              name="singleParentText"
              onChange={this.props.handleTextboxChange}
            />
          </div>
          <div className="line">
            <input type="checkbox" name="poverty" onChange={this.props.handleCheckboxChange} />
            Living in Poverty
          <textarea wrap="soft" className="factor-details" name="povertyText" onChange={this.props.handleTextboxChange} />
          </div>
          <div className="line">
            <input type="checkbox" name="teenParent" onChange={this.props.handleCheckboxChange} />
            Parent Was a Teen Parent
          <textarea
              wrap="soft"
              className="factor-details"
              name="teenParentText"
              onChange={this.props.handleTextboxChange}
            />
          </div>
          <div className="line">
            <input type="checkbox" name="neglect" onChange={this.props.handleCheckboxChange} />
            History of Neglect
          <textarea wrap="soft" className="factor-details" name="neglectText" onChange={this.props.handleTextboxChange} />
          </div>
          <div className="line">
            <input type="checkbox" name="abuse" onChange={this.props.handleCheckboxChange} />
            Physical/Sexual Abuse
          <textarea wrap="soft" className="factor-details" name="abuseText" onChange={this.props.handleTextboxChange} />
          </div>
          <div className="line">
            <input type="checkbox" name="foster" onChange={this.props.handleCheckboxChange} />
            In Foster Care
          <textarea wrap="soft" className="factor-details" name="fosterText" onChange={this.props.handleTextboxChange} />
          </div>
          <div className="line">
            <input type="checkbox" name="drugs" onChange={this.props.handleCheckboxChange} />
            Fam History of Drug/Alcohol Abuse
          <textarea wrap="soft" className="factor-details" name="drugsText" onChange={this.props.handleTextboxChange} />
          </div>
          <div className="line">
            <input type="checkbox" name="substance" onChange={this.props.handleCheckboxChange} />
            Substance Abuse in Home
          <textarea
              wrap="soft"
              className="factor-details"
              name="substanceText" onChange={this.props.handleTextboxChange}
            />
          </div>
          <div className="line">
            <input type="checkbox" name="violence" onChange={this.props.handleCheckboxChange} />
            Domestic Violence in Home
          <textarea wrap="soft" className="factor-details" name="violenceText" onChange={this.props.handleTextboxChange} />
          </div>
          <div className="line">
            <input type="checkbox" name="conflict" onChange={this.props.handleCheckboxChange} />
            Ongoing Family Conflict
          <textarea wrap="soft" className="factor-details" name="conflictText" onChange={this.props.handleTextboxChange} />
          </div>
          <div className="line">
            <input type="checkbox" name="criminal" onChange={this.props.handleCheckboxChange} />
            Parent Criminal History
          <textarea wrap="soft" className="factor-details" name="criminalText" onChange={this.props.handleTextboxChange} />
          </div>
          <div className="line">
            <input type="checkbox" name="incarceration" onChange={this.props.handleCheckboxChange} />
            Parent Incarcerated (past/present)
          <textarea
              wrap="soft"
              className="factor-details"
              name="incarcerationText" onChange={this.props.handleTextboxChange}
            />
          </div>
          <div className="line">
            <input type="checkbox" name="criminalHome" onChange={this.props.handleCheckboxChange} />
            Criminal Activity in Home
          <textarea
              wrap="soft"
              className="factor-details"
              name="criminalHomeText" onChange={this.props.handleTextboxChange}
            />
          </div>
          <div className="line">
            <input type="checkbox" name="gang" onChange={this.props.handleCheckboxChange} />
            Family Gang Activity
          <textarea wrap="soft" className="factor-details" name="gangText" onChange={this.props.handleTextboxChange} />
          </div>
          <div className="line">
            <input type="checkbox" name="mentalIll" onChange={this.props.handleCheckboxChange} />
            Parent With Mental Illness
          <textarea
              wrap="soft"
              className="factor-details"
              name="mentalIllText" onChange={this.props.handleTextboxChange}
            />
          </div>
          <div className="line">
            <input type="checkbox" name="relocation" onChange={this.props.handleCheckboxChange} />
            Frequent Relocation/Unstable Living
          <textarea
              wrap="soft"
              className="factor-details"
              name="relocationText" onChange={this.props.handleTextboxChange}
            />
          </div>
          <div className="line">
            <input type="checkbox" name="education" onChange={this.props.handleCheckboxChange} />
            Low Value on Education Completion
          <textarea
              wrap="soft"
              className="factor-details"
              name="educationText" onChange={this.props.handleTextboxChange}
            />
          </div>
          <div className="line">
            <input type="checkbox" name="sibling" onChange={this.props.handleCheckboxChange} />
            Older Sibling with High-Risk Behavior
          <textarea wrap="soft" className="factor-details" name="siblingText" onChange={this.props.handleTextboxChange} />
          </div>
          <div className="line">
            <input type="checkbox" name="neighborhood" onChange={this.props.handleCheckboxChange} />
            High Crime/Violent Neighborhood
          <textarea
              wrap="soft"
              className="factor-details"
              name="neighborhoodText" onChange={this.props.handleTextboxChange}
            />
          </div>
          <div className="line">
            <input type="checkbox" name="delinquentPeers" onChange={this.props.handleCheckboxChange} />
            Exposure to Delinquent Peers
          <textarea
              wrap="soft"
              className="factor-details"
              name="delinquentPeersText" onChange={this.props.handleTextboxChange}
            />
          </div>
          <div className="line">
            <input type="checkbox" name="monitoring" onChange={this.props.handleCheckboxChange} />
            Lack of Parental Monitoring
          <textarea
              wrap="soft"
              className="factor-details"
              name="monitoringText" onChange={this.props.handleTextboxChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({ state })

// export default EnvRisk;
export default connect(mapState, null)(EnvRisk);
