import React from 'react';

const ChildRisk = () => {
  return (
    <div>
      <h2>Child Risk Factors Observed</h2>
      <div className="line">
        <input type="checkbox" name="anger" />
        Aggressive Anger Problems
        <textarea wrap="soft" className="factor-details" name="anger-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="withdrawal" />
        Social Withdrawal
        <textarea
          wrap="soft"
          className="factor-details"
          name="withdrawal-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="esteem" />
        Low Self-Esteem
        <textarea wrap="soft" className="factor-details" name="esteem-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="attendance" />
        Poor School Attendance
        <textarea
          wrap="soft"
          className="factor-details"
          name="attendance-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="performance" />
        Poor Work Habits/Performance
        <textarea
          wrap="soft"
          className="factor-details"
          name="performance-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="peer-relationships" />
        Poor Peer Relationships
        <textarea
          wrap="soft"
          className="factor-details"
          name="peer-relationships-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="adult-relationships" />
        Poor Adult Relationships
        <textarea
          wrap="soft"
          className="factor-details"
          name="adult-relationships-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="hygiene" />
        Poor Hygiene/Health Concerns
        <textarea wrap="soft" className="factor-details" name="hygiene-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="sex-behavior" />
        Sexualized Behavior
        <textarea
          wrap="soft"
          className="factor-details"
          name="sex-behavior-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="frustrated" />
        Easily Frustrated/Poor Problem Solving
        <textarea
          wrap="soft"
          className="factor-details"
          name="frustrated-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="depression" />
        Depression/Sadness/Grief
        <textarea
          wrap="soft"
          className="factor-details"
          name="depression-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="cries" />
        Cries Easily/Often
        <textarea wrap="soft" className="factor-details" name="cries-text" />
      </div>
      <div className="line">
        <input type="checkbox" name="impulsive" />
        Poor Impulse Control/Inattentive
        <textarea
          wrap="soft"
          className="factor-details"
          name="impulsive-text"
        />
      </div>
      <div className="line">
        <input type="checkbox" name="nervous" />
        Nervous Habits
        <textarea wrap="soft" className="factor-details" name="nervous-text" />
      </div>
      <div className="line">
        Notes:
        <textarea className="notes-box" name="child-risk-notes" />
      </div>
    </div>
  );
};

export default ChildRisk;
