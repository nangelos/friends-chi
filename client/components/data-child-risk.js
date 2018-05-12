import React from 'react';

const ChildRisk = () => {
  return (
    <div>
      <h2>Child Risk Factors Observed</h2>
      <div className="line">
        <input type="checkbox" name="anger" />
        Aggressive Anger Problems
        <textarea wrap="soft" className="factor-details" name="angerText" />
      </div>
      <div className="line">
        <input type="checkbox" name="withdrawal" />
        Social Withdrawal
        <textarea
          wrap="soft"
          className="factor-details"
          name="withdrawalText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="esteem" />
        Low Self-Esteem
        <textarea wrap="soft" className="factor-details" name="esteemText" />
      </div>
      <div className="line">
        <input type="checkbox" name="attendance" />
        Poor School Attendance
        <textarea
          wrap="soft"
          className="factor-details"
          name="attendanceText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="performance" />
        Poor Work Habits/Performance
        <textarea
          wrap="soft"
          className="factor-details"
          name="performanceText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="peerRelationships" />
        Poor Peer Relationships
        <textarea
          wrap="soft"
          className="factor-details"
          name="peerRelationshipsText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="adultRelationships" />
        Poor Adult Relationships
        <textarea
          wrap="soft"
          className="factor-details"
          name="adultRelationshipsText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="hygiene" />
        Poor Hygiene/Health Concerns
        <textarea wrap="soft" className="factor-details" name="hygieneText" />
      </div>
      <div className="line">
        <input type="checkbox" name="sexBehavior" />
        Sexualized Behavior
        <textarea
          wrap="soft"
          className="factor-details"
          name="sexBehaviorText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="frustrated" />
        Easily Frustrated/Poor Problem Solving
        <textarea
          wrap="soft"
          className="factor-details"
          name="frustratedText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="depression" />
        Depression/Sadness/Grief
        <textarea
          wrap="soft"
          className="factor-details"
          name="depressionText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="cries" />
        Cries Easily/Often
        <textarea wrap="soft" className="factor-details" name="criesText" />
      </div>
      <div className="line">
        <input type="checkbox" name="impulsive" />
        Poor Impulse Control/Inattentive
        <textarea
          wrap="soft"
          className="factor-details"
          name="impulsiveText"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="nervous" />
        Nervous Habits
        <textarea wrap="soft" className="factor-details" name="nervousText" />
      </div>
      <div className="line">
        Notes:
        <textarea className="notes-box" name="childRiskNotes" />
      </div>
    </div>
  );
};

export default ChildRisk;
