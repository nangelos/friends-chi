import React from 'react';

const EnvRisk = () => {
  return (
    <div>
      <h2>Environment Risk Factors Observed</h2>
      <div className="line">
        <input type="checkbox" name="single-parent" />
        Single Parent Family
        <textarea
          wrap="soft"
          className="factor-details"
          name="single-parent-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="poverty" />
        Living in Poverty
        <textarea wrap="soft" className="factor-details" name="poverty-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="teen-parent" />
        Parent Was a Teen Parent
        <textarea
          wrap="soft"
          className="factor-details"
          name="teen-parent-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="neglect" />
        History of Neglect
        <textarea wrap="soft" className="factor-details" name="neglect-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="abuse" />
        Physical/Sexual Abuse
        <textarea wrap="soft" className="factor-details" name="abuse-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="foster" />
        In Foster Care
        <textarea wrap="soft" className="factor-details" name="foster-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="drugs" />
        Fam History of Drug/Alcohol Abuse
        <textarea wrap="soft" className="factor-details" name="drugs-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="substance" />
        Substance Abuse in Home
        <textarea
          wrap="soft"
          className="factor-details"
          name="substance-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="violence" />
        Domestic Violence in Home
        <textarea wrap="soft" className="factor-details" name="violence-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="conflict" />
        Ongoing Family Conflict
        <textarea wrap="soft" className="factor-details" name="conflict-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="criminal" />
        Parent Criminal History
        <textarea wrap="soft" className="factor-details" name="criminal-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="incarceration" />
        Parent Incarcerated (past/present)
        <textarea
          wrap="soft"
          className="factor-details"
          name="incarceration-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="criminal-home" />
        Criminal Activity in Home
        <textarea
          wrap="soft"
          className="factor-details"
          name="criminal-home-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="gang" />
        Family Gang Activity
        <textarea wrap="soft" className="factor-details" name="gang-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="mental-ill" />
        Parent With Mental Illness
        <textarea
          wrap="soft"
          className="factor-details"
          name="mental-ill-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="relocation" />
        Frequent Relocation/Unstable Living
        <textarea
          wrap="soft"
          className="factor-details"
          name="relocation-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="education" />
        Low Value on Education Completion
        <textarea
          wrap="soft"
          className="factor-details"
          name="education-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="sibling" />
        Older Sibling with High-Risk Behavior
        <textarea wrap="soft" className="factor-details" name="sibling-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="neighborhood" />
        High Crime/Violent Neighborhood
        <textarea
          wrap="soft"
          className="factor-details"
          name="neighborhood-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="delinquent-peers" />
        Exposure to Delinquent Peers
        <textarea
          wrap="soft"
          className="factor-details"
          name="delinquent-peers-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="montoring" />
        Lack of Parental Monitoring
        <textarea
          wrap="soft"
          className="factor-details"
          name="montoring-text"
        />
      </div>
    </div>
  );
};

export default EnvRisk;
