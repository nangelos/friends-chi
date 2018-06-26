import React from 'react';

const ScoringRisks = props => {

  return (
    <div>
      {/* ENVIRONMENTAL QUESTIONNAIRE */}
      <h2 className="section-header" id="scoring-header">
        Environmental Risks
            </h2>
      <div className="score-section" id="score">
        <div className="score-line">
          <input type="checkbox" name="singleParent" onChange={props.handleCheckboxChange} />
          Single Parent Family
              </div>
        <div className="score-line">
          <input type="checkbox" name="poverty" onChange={props.handleCheckboxChange} />
          Living in Poverty
              </div>
        <div className="score-line">
          <input type="checkbox" name="teenParent" onChange={props.handleCheckboxChange} />
          Parent Was a Teen Parent
              </div>
        <div className="score-line">
          <input type="checkbox" name="neglect" onChange={props.handleCheckboxChange} />
          History of Neglect
              </div>
        <div className="score-line">
          <input type="checkbox" name="abuse" onChange={props.handleCheckboxChange} />
          Physical/Sexual Abuse
              </div>
        <div className="score-line">
          <input type="checkbox" name="foster" onChange={props.handleCheckboxChange} />
          In Foster Care
              </div>
        <div className="score-line">
          <input type="checkbox" name="drugs" onChange={props.handleCheckboxChange} />
          Family History of Drug/Alcohol Abuse
              </div>
        <div className="score-line">
          <input type="checkbox" name="substance" onChange={props.handleCheckboxChange} />
          Substance Abuse in Home
              </div>
        <div className="score-line">
          <input type="checkbox" name="violence" onChange={props.handleCheckboxChange} />
          Domestic Violence in Home
              </div>
        <div className="score-line">
          <input type="checkbox" name="conflict" onChange={props.handleCheckboxChange} />
          Ongoing Family Conflict
              </div>
        <div className="score-line">
          <input type="checkbox" name="criminal" onChange={props.handleCheckboxChange} />
          Parent Criminal History
              </div>
        <div className="score-line">
          <input type="checkbox" name="incarceration" onChange={props.handleCheckboxChange} />
          Parent Incarcerated (past/present)
              </div>
        <div className="score-line">
          <input type="checkbox" name="criminalHome" onChange={props.handleCheckboxChange} />
          Criminal Activity in Home
              </div>
        <div className="score-line">
          <input type="checkbox" name="gang" onChange={props.handleCheckboxChange} />
          Family Gang Activity
              </div>
        <div className="score-line">
          <input type="checkbox" name="mentalIll" onChange={props.handleCheckboxChange} />
          Parent with Mental Illness
              </div>
        <div className="score-line">
          <input type="checkbox" name="relocation" onChange={props.handleCheckboxChange} />
          Frequest Relocation/Unstable Living
              </div>
        <div className="score-line">
          <input type="checkbox" name="education" onChange={props.handleCheckboxChange} />
          Low Value on Education
              </div>
        <div className="score-line">
          <input type="checkbox" name="sibling" onChange={props.handleCheckboxChange} />
          Older Sibling with High-Risk Behavior
              </div>
        <div className="score-line">
          <input type="checkbox" name="neighborhood" onChange={props.handleCheckboxChange} />
          High Crime/Violent Neighborhood
              </div>
        <div className="score-line">
          <input
            type="checkbox"
            name="delinquentPeers"
            onChange={props.handleCheckboxChange}
          />
          Exposure to Delinquent Peers
              </div>
        <div className="score-line">
          <input type="checkbox" name="monitoring" onChange={props.handleCheckboxChange} />
          Lack of Parental Monitoring
              </div>
        <div className="riskscore-div">
          <h1 className="risk-score">
            Score: {props.riskCheckboxScorer(props.riskList)}
          </h1>
        </div>
      </div>
    </div>
  )
}


export default ScoringRisks;
