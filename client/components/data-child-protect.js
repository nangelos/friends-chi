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
          name="intelligent-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="efficacy" />
        Demonstrates Self-Efficacy
        <textarea wrap="soft" className="factor-details" name="efficacy-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="protect-esteem" />
        Healthy Self Exteem
        <textarea
          wrap="soft"
          className="factor-details"
          name="protect-esteem-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="interpersonal" />
        Good Interpersonal Skills
        <textarea
          wrap="soft"
          className="factor-details"
          name="interpersonal-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="initiative" />
        Takes Initiative
        <textarea
          wrap="soft"
          className="factor-details"
          name="initiative-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="frustration" />
        Age-appropriate Frustration
        <textarea
          wrap="soft"
          className="factor-details"
          name="frustration-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="soothe" />
        Ability to Self-soothe
        <textarea wrap="soft" className="factor-details" name="soothe-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="help" />
        Seeks Help/Support
        <textarea wrap="soft" className="factor-details" name="help-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="temperament" />
        Easy-Going Temperament
        <textarea
          wrap="soft"
          className="factor-details"
          name="temperament-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="hope" />
        Has a Sense of Hope
        <textarea wrap="soft" className="factor-details" name="hope-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="trying" />
        Willing to Keep Trying
        <textarea wrap="soft" className="factor-details" name="trying-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="likes-school" />
        Likes School/Wants to Be There
        <textarea
          wrap="soft"
          className="factor-details"
          name="likes-school-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="humor" />
        Has a Sense of Humor
        <textarea wrap="soft" className="factor-details" name="humor-text" />
      </div>
      <div className="line">
        Notes:
        <textarea className="notes-box" name="child-protect-notes" />
      </div>
    </div>
  );
};

export default ChildProtect;
