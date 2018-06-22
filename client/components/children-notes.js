import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllData, fetchSelectData } from '../store';
import { ChildRisk, EnvRisk, ChildProtect, EnvProtect } from './index';


class ChildNotes extends Component {

  componentDidMount() {
    const { getChildData } = this.props;
    const { pathname } = this.props.location;
    getChildData(pathname.slice(10))
  }

  getTrue = (obj) => {
    return Object.keys(obj)
      .filter(key => obj[key] === true)
  }

  render() {
    const childData = this.props.state.data.selectedData;
    return (
      <div>
        <h1>Here are the child notes</h1>
        <div>
          {
            childData &&
            <div>
              <div className="topline">
                Date: <input type="date" name="date" value={childData.date} />
                School: <input type="text" name="school" value={childData.school} />
                Observer Name: <input type="text" name="observer" value={childData.observer} />
                Child Initials: <input type="text" name="childInitials" value={childData.childInitials} />
              </div>
              <div className="risk-factors" id="risk-line">
                {/* Child Risk Factors Section */}
                <div id="NotesChildRisk">
                  <h2>Child Risk Factors Observed</h2>
                  <div className="line">
                    <input type="checkbox" name="anger" checked={childData.anger} />
                    Aggressive Anger Problems
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="angerText"
                      value={childData.angerText} />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="withdrawal" checked={childData.withdrawal} />
                    Social Withdrawal
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="withdrawalText"
                      value={childData.withdrawalText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="esteem" checked={childData.esteem} />
                    Low Self-Esteem
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="esteemText"
                      value={childData.esteemText} />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="attendance" checked={childData.attendance} />
                    Poor School Attendance
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="attendanceText"
                      value={childData.attendanceText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="performance" checked={childData.performance} />
                    Poor Work Habits/Performance
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="performanceText"
                      value={childData.performanceText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="peerRelationships" checked={childData.peerRelationships} />
                    Poor Peer Relationships
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="peerRelationshipsText"
                      value={childData.peerRelationshipsText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="adultRelationships" checked={childData.adultRelationships} />
                    Poor Adult Relationships
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="adultRelationshipsText"
                      value={childData.adultRelationshipsText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="hygiene" checked={childData.hygiene} />
                    Poor Hygiene/Health Concerns
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="hygieneText"
                      value={childData.hygieneText} />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="sexBehavior" checked={childData.sexBehavior} />
                    Sexualized Behavior
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="sexBehaviorText"
                      value={childData.sexBehaviorText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="frustrated" checked={childData.frustrated} />
                    Easily Frustrated/Poor Problem Solving
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="frustratedText"
                      value={childData.frustratedText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="depression" checked={childData.depression} />
                    Depression/Sadness/Grief
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="depressionText"
                      value={childData.depressionText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="cries" checked={childData.cries} />
                    Cries Easily/Often
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="criesText"
                      value={childData.criesText} />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="impulsive" checked={childData.impulsive} />
                    Poor Impulse Control/Inattentive
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="impulsiveText"
                      value={childData.impulsiveText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="nervous" checked={childData.nervous} />
                    Nervous Habits
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="nervousText"
                      value={childData.nervousText} />
                  </div>
                  <div className="line">
                    Notes:
          <textarea
                      className="notes-box"
                      name="childRiskNotes"
                      value={childData.childRiskNotes} />
                  </div>
                  {/* Environmental Risk Section */}
                </div>
                <div id="NotesEnvRisk">
                  <h2>Environment Risk Factors Observed</h2>
                  <div>
                    <div className="line">
                      <input type="checkbox" name="singleParent" checked={childData.singleParent} />
                      Single Parent Family
          <textarea
                        wrap="soft"
                        className="factor-details"
                        name="singleParentText"
                        value={childData.singleParentText}
                      />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="poverty" checked={childData.poverty} />
                      Living in Poverty
          <textarea wrap="soft" className="factor-details" name="povertyText" value={childData.povertyText} />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="teenParent" checked={childData.teenParent} />
                      Parent Was a Teen Parent
          <textarea
                        wrap="soft"
                        className="factor-details"
                        name="teenParentText"
                        value={childData.teenParentText}
                      />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="neglect" checked={childData.neglect} />
                      History of Neglect
          <textarea wrap="soft" className="factor-details" name="neglectText" value={childData.neglectText} />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="abuse" checked={childData.abuse} />
                      Physical/Sexual Abuse
          <textarea wrap="soft" className="factor-details" name="abuseText" value={childData.abuseText} />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="foster" checked={childData.foster} />
                      In Foster Care
          <textarea wrap="soft" className="factor-details" name="fosterText" value={childData.fosterText} />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="drugs" checked={childData.drugs} />
                      Fam History of Drug/Alcohol Abuse
          <textarea wrap="soft" className="factor-details" name="drugsText" value={childData.drugsText} />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="substance" checked={childData.substance} />
                      Substance Abuse in Home
          <textarea
                        wrap="soft"
                        className="factor-details"
                        name="substanceText" value={childData.substanceText}
                      />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="violence" checked={childData.violence} />
                      Domestic Violence in Home
          <textarea wrap="soft" className="factor-details" name="violenceText" value={childData.violenceText} />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="conflict" checked={childData.conflict} />
                      Ongoing Family Conflict
          <textarea wrap="soft" className="factor-details" name="conflictText" value={childData.conflictText} />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="criminal" checked={childData.criminal} />
                      Parent Criminal History
          <textarea wrap="soft" className="factor-details" name="criminalText" value={childData.criminalText} />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="incarceration" checked={childData.incarceration} />
                      Parent Incarcerated (past/present)
          <textarea
                        wrap="soft"
                        className="factor-details"
                        name="incarcerationText" value={childData.incarcerationText}
                      />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="criminalHome" checked={childData.criminalHome} />
                      Criminal Activity in Home
          <textarea
                        wrap="soft"
                        className="factor-details"
                        name="criminalHomeText" value={childData.criminalHomeText}
                      />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="gang" checked={childData.gang} />
                      Family Gang Activity
          <textarea wrap="soft" className="factor-details" name="gangText" value={childData.gangText} />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="mentalIll" checked={childData.mentalIll} />
                      Parent With Mental Illness
          <textarea
                        wrap="soft"
                        className="factor-details"
                        name="mentalIllText" value={childData.mentalIllText}
                      />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="relocation" checked={childData.relocation} />
                      Frequent Relocation/Unstable Living
          <textarea
                        wrap="soft"
                        className="factor-details"
                        name="relocationText" value={childData.relocationText}
                      />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="education" checked={childData.education} />
                      Low Value on Education Completion
          <textarea
                        wrap="soft"
                        className="factor-details"
                        name="educationText" value={childData.educationText}
                      />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="sibling" checked={childData.sibling} />
                      Older Sibling with High-Risk Behavior
          <textarea wrap="soft" className="factor-details" name="siblingText" value={childData.siblingText} />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="neighborhood" checked={childData.neighborhood} />
                      High Crime/Violent Neighborhood
          <textarea
                        wrap="soft"
                        className="factor-details"
                        name="neighborhoodText" value={childData.neighborhoodText}
                      />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="delinquentPeers" checked={childData.delinquentPeers} />
                      Exposure to Delinquent Peers
          <textarea
                        wrap="soft"
                        className="factor-details"
                        name="delinquentPeersText" value={childData.delinquentPeersText}
                      />
                    </div>
                    <div className="line">
                      <input type="checkbox" name="monitoring" checked={childData.monitoring} />
                      Lack of Parental Monitoring
          <textarea
                        wrap="soft"
                        className="factor-details"
                        name="monitoringText" value={childData.monitoringText}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="risk-factors" id="protective-line">
                {/* Child Protective Factors Section */}
                <div>
                  <h2>Child Protective Factors Observed</h2>
                  <div className="line">
                    <input type="checkbox" name="intelligent" checked={childData.intelligent} />
                    Appears Highly Intelligent
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="intelligentText"
                      value={childData.intelligentText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="efficacy" checked={childData.efficacy} />
                    Demonstrates Self-Efficacy
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="efficacyText"
                      value={childData.efficacyText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="protectEsteem" checked={childData.protectEsteem} />
                    Healthy Self Exteem
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="protectEsteemText"
                      value={childData.protectEsteemText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="interpersonal" checked={childData.interpersonal} />
                    Good Interpersonal Skills
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="interpersonalText"
                      value={childData.interpersonalText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="initiative" checked={childData.initiative} />
                    Takes Initiative
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="initiativeText"
                      value={childData.initiativeText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="frustration" checked={childData.frustration} />
                    Age-appropriate Frustration
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="frustrationText"
                      value={childData.frustrationText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="soothe" checked={childData.soothe} />
                    Ability to Self-soothe
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="sootheText"
                      value={childData.sootheText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="help" checked={childData.help} />
                    Seeks Help/Support
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="helpText"
                      value={childData.helpText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="temperament" checked={childData.temperament} />
                    Easy-Going Temperament
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="temperamentText"
                      value={childData.temperamentText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="hope" checked={childData.hope} />
                    Has a Sense of Hope
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="hopeText"
                      value={childData.hopeText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="trying" checked={childData.trying} />
                    Willing to Keep Trying
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="tryingText"
                      value={childData.tryingText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="likesSchool" checked={childData.likesSchool} />
                    Likes School/Wants to Be There
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="likesSchoolText"
                      value={childData.likesSchoolText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="humor" checked={childData.humor} />
                    Has a Sense of Humor
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="humorText"
                      value={childData.humorText}
                    />
                  </div>
                  <div className="line">
                    Notes:
          <textarea
                      className="notes-box"
                      name="childProtectNotes"
                      id="notes-one"
                      value={childData.childProtectNotes}
                    />
                  </div>
                </div>
                {/* Enviromental Protective Factors Section */}
                <div>
                  <h2>Environment Protective Factors Observed</h2>
                  <div className="line">
                    <input type="checkbox" name="goodCaregiver" checked={childData.goodCaregiver} />
                    Good Relationship with at Least One Caring and Consistent Caregiver
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="goodCaregiverText"
                      value={childData.goodCaregiverText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="supervision" checked={childData.supervision} />
                    Family Monitors and Supervises Child Well
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="supervisionText"
                      value={childData.supervisionText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="extended" checked={childData.extended} />
                    Extended Family Support
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="extendedText"
                      value={childData.extendedText} />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="traditions" checked={childData.traditions} />
                    Strong Positive Traditions
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="traditionsText"
                      value={childData.traditionsText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="community" checked={childData.community} />
                    Strong Community Ties/Neighbors Who Give Extra Support
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="communityText"
                      value={childData.communityText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="resources" checked={childData.resources} />
                    Access to Basic Resources (Money, Housing, etc.)
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="resourcesText"
                      value={childData.resourcesText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="familyStress" checked={childData.familyStress} />
                    Family Has Ability to Manage Stress Well
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="familyStressText"
                      value={childData.familyStressText}
                    />
                  </div>
                  <div className="line">
                    <input type="checkbox" name="familyViolence" checked={childData.familyViolence} />
                    No Family Violence in the Home
          <textarea
                      wrap="soft"
                      className="factor-details"
                      name="familyViolenceText"
                      value={childData.familyViolenceText}
                    />
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

const mapState = state => ({ state });
const mapDispatch = dispatch => {
  return {
    getChildData: (name) => dispatch(fetchSelectData(name))
  }
}
export default connect(mapState, mapDispatch)(ChildNotes);
