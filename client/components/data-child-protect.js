import React from 'react';

const ChildProtect = () => {
  return (
    <div>
      <h2>Child Protective Factors Observed</h2>
      <div className="line">
        <input type="checkbox" name="intelligent" />
        Appears Highly Intelligent
        <textarea
          wrap="soft"
          className="factor-details"
          name="intelligentText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="efficacy" />
        Demonstrates Self-Efficacy
        <textarea wrap="soft" className="factor-details" name="efficacyText" />
      </div>
      <div className="line">
        <input type="checkbox" name="protectEsteem" />
        Healthy Self Exteem
        <textarea
          wrap="soft"
          className="factor-details"
          name="protectEsteemText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="interpersonal" />
        Good Interpersonal Skills
        <textarea
          wrap="soft"
          className="factor-details"
          name="interpersonalText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="initiative" />
        Takes Initiative
        <textarea
          wrap="soft"
          className="factor-details"
          name="initiativeText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="frustration" />
        Age-appropriate Frustration
        <textarea
          wrap="soft"
          className="factor-details"
          name="frustrationText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="soothe" />
        Ability to Self-soothe
        <textarea wrap="soft" className="factor-details" name="sootheText" />
      </div>
      <div className="line">
        <input type="checkbox" name="help" />
        Seeks Help/Support
        <textarea wrap="soft" className="factor-details" name="helpText" />
      </div>
      <div className="line">
        <input type="checkbox" name="temperament" />
        Easy-Going Temperament
        <textarea
          wrap="soft"
          className="factor-details"
          name="temperamentText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="hope" />
        Has a Sense of Hope
        <textarea wrap="soft" className="factor-details" name="hopeText" />
      </div>
      <div className="line">
        <input type="checkbox" name="trying" />
        Willing to Keep Trying
        <textarea wrap="soft" className="factor-details" name="tryingText" />
      </div>
      <div className="line">
        <input type="checkbox" name="likesSchool" />
        Likes School/Wants to Be There
        <textarea
          wrap="soft"
          className="factor-details"
          name="likesSchoolText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="humor" />
        Has a Sense of Humor
        <textarea wrap="soft" className="factor-details" name="humorText" />
      </div>
      <div className="line">
        Notes:
        <textarea
          className="notes-box"
          name="childProtectNotes"
          id="notes-one"
        />
      </div>
    </div>
  );
};

export default ChildProtect;
