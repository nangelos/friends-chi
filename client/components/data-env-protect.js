import React from 'react';

const EnvProtect = () => {
  return (
    <div>
      <h2>Environment Protective Factors Observed</h2>
      <div className="line">
        <input type="checkbox" name="goodCaregiver" />
        Good Relationship with at Least One Caring and Consistent Caregiver
        <textarea
          wrap="soft"
          className="factor-details"
          name="goodCaregiverText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="supervision" />
        Family Monitors and Supervises Child Well
        <textarea
          wrap="soft"
          className="factor-details"
          name="supervisionText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="extended" />
        Extended Family Support
        <textarea wrap="soft" className="factor-details" name="extendedText" />
      </div>
      <div className="line">
        <input type="checkbox" name="traditions" />
        Strong Positive Traditions
        <textarea
          wrap="soft"
          className="factor-details"
          name="traditionsText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="community" />
        Strong Community Ties/Neighbors Who Give Extra Support
        <textarea
          wrap="soft"
          className="factor-details"
          name="communityText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="resources" />
        Access to Basic Resources (Money, Housing, etc.)
        <textarea
          wrap="soft"
          className="factor-details"
          name="resourcesText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="family-stress" />
        Family Has Ability to Manage Stress Well
        <textarea
          wrap="soft"
          className="factor-details"
          name="familyStressText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="familyViolence" />
        No Family Violence in the Home
        <textarea
          wrap="soft"
          className="factor-details"
          name="familyViolenceText"
        />
      </div>
    </div>
  );
};

export default EnvProtect;
