import React from 'react';

const EnvProtect = () => {
  return (
    <div>
      <h2>Environment Protective Factors Observed</h2>
      <div className="line">
        <input type="checkbox" name="good-caregiver" />
        Good Relationship with at Least One Caring and Consistent Caregiver
        <textarea
          wrap="soft"
          className="factor-details"
          name="good-caregiver-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="supervision" />
        Family Monitors and Supervises Child Well
        <textarea
          wrap="soft"
          className="factor-details"
          name="supervision-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="extended" />
        Extended Family Support
        <textarea wrap="soft" className="factor-details" name="extended-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="traditions" />
        Strong Positive Traditions
        <textarea
          wrap="soft"
          className="factor-details"
          name="traditions-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="community" />
        Strong Community Ties/Neighbors Who Give Extra Support
        <textarea
          wrap="soft"
          className="factor-details"
          name="community-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="resources" />
        Access to Basic Resources (Money, Housing, etc.)
        <textarea
          wrap="soft"
          className="factor-details"
          name="resources-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="family-stress" />
        Family Has Ability to Manage Stress Well
        <textarea
          wrap="soft"
          className="factor-details"
          name="family-stress-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="family-violence" />
        No Family Violence in the Home
        <textarea
          wrap="soft"
          className="factor-details"
          name="family-violence-text"
        />
      </div>
    </div>
  );
};

export default EnvProtect;
