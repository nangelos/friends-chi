import React from 'react';

const EnvRisk = () => {
  return (
    <div>
      <h2>Environment Risk Factors Observed</h2>
      <div className="line">
        <input type="checkbox" name="singleParent" />
        Single Parent Family
        <textarea
          wrap="soft"
          className="factor-details"
          name="singleParentText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="poverty" />
        Living in Poverty
        <textarea wrap="soft" className="factor-details" name="povertyText" />
      </div>
      <div className="line">
        <input type="checkbox" name="teenParent" />
        Parent Was a Teen Parent
        <textarea
          wrap="soft"
          className="factor-details"
          name="teenParentText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="neglect" />
        History of Neglect
        <textarea wrap="soft" className="factor-details" name="neglectText" />
      </div>
      <div className="line">
        <input type="checkbox" name="abuse" />
        Physical/Sexual Abuse
        <textarea wrap="soft" className="factor-details" name="abuseText" />
      </div>
      <div className="line">
        <input type="checkbox" name="foster" />
        In Foster Care
        <textarea wrap="soft" className="factor-details" name="fosterText" />
      </div>
      <div className="line">
        <input type="checkbox" name="drugs" />
        Fam History of Drug/Alcohol Abuse
        <textarea wrap="soft" className="factor-details" name="drugsText" />
      </div>
      <div className="line">
        <input type="checkbox" name="substance" />
        Substance Abuse in Home
        <textarea
          wrap="soft"
          className="factor-details"
          name="substanceText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="violence" />
        Domestic Violence in Home
        <textarea wrap="soft" className="factor-details" name="violenceText" />
      </div>
      <div className="line">
        <input type="checkbox" name="conflict" />
        Ongoing Family Conflict
        <textarea wrap="soft" className="factor-details" name="conflictText" />
      </div>
      <div className="line">
        <input type="checkbox" name="criminal" />
        Parent Criminal History
        <textarea wrap="soft" className="factor-details" name="criminalText" />
      </div>
      <div className="line">
        <input type="checkbox" name="incarceration" />
        Parent Incarcerated (past/present)
        <textarea
          wrap="soft"
          className="factor-details"
          name="incarcerationText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="criminalHome" />
        Criminal Activity in Home
        <textarea
          wrap="soft"
          className="factor-details"
          name="criminalHomeText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="gang" />
        Family Gang Activity
        <textarea wrap="soft" className="factor-details" name="gangText" />
      </div>
      <div className="line">
        <input type="checkbox" name="mentalIll" />
        Parent With Mental Illness
        <textarea
          wrap="soft"
          className="factor-details"
          name="mentalIllText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="relocation" />
        Frequent Relocation/Unstable Living
        <textarea
          wrap="soft"
          className="factor-details"
          name="relocationText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="education" />
        Low Value on Education Completion
        <textarea
          wrap="soft"
          className="factor-details"
          name="educationText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="sibling" />
        Older Sibling with High-Risk Behavior
        <textarea wrap="soft" className="factor-details" name="siblingText" />
      </div>
      <div className="line">
        <input type="checkbox" name="neighborhood" />
        High Crime/Violent Neighborhood
        <textarea
          wrap="soft"
          className="factor-details"
          name="neighborhoodText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="delinquentPeers" />
        Exposure to Delinquent Peers
        <textarea
          wrap="soft"
          className="factor-details"
          name="delinquentPeersText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="montoring" />
        Lack of Parental Monitoring
        <textarea
          wrap="soft"
          className="factor-details"
          name="montoringText"
        />
      </div>
    </div>
  );
};

export default EnvRisk;
