import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addScore } from '../store';


class ChildScoring extends Component {
  state = {
    school: '',
    childName: '',
    gender: 'BOY',
    totalScore: 0,
    //friend questionnaire
    friendAnger: 0,
    friendWithdrawal: 0,
    friendEsteem: 0,
    friendAttendance: 0,
    friendPerformance: 0,
    friendPeerRelationships: 0,
    friendAdultRelationships: 0,
    friendHygiene: 0,
    friendSexBehavior: 0,
    friendFrustrated: 0,
    friendDepression: 0,
    friendCries: 0,
    friendImpulsive: 0,
    friendNervous: 0,
    friendScore: 0,
    //teacher questionnaire
    teacherAnger: 0,
    teacherWithdrawal: 0,
    teacherEsteem: 0,
    teacherAttendance: 0,
    teacherPerformance: 0,
    teacherPeerRelationships: 0,
    teacherAdultRelationships: 0,
    teacherHygiene: 0,
    teacherSexBehavior: 0,
    teacherFrustrated: 0,
    teacherDepression: 0,
    teacherCries: 0,
    teacherImpulsive: 0,
    teacherNervous: 0,
    teacherScore: 0,
    //environment risk
    singleParent: false,
    poverty: false,
    teenParent: false,
    neglect: false,
    abuse: false,
    foster: false,
    drugs: false,
    substance: false,
    violence: false,
    conflict: false,
    criminal: false,
    incarceration: false,
    criminalHome: false,
    gang: false,
    mentalIll: false,
    relocation: false,
    education: false,
    sibling: false,
    neighborhood: false,
    delinquentPeers: false,
    monitoring: false,
    riskScore: 0,
    //child strengths
    intelligent: false,
    efficacy: false,
    protectEsteem: false,
    interpersonal: false,
    initiative: false,
    frustration: false,
    soothe: false,
    help: false,
    temperament: false,
    hope: false,
    trying: false,
    likesSchool: false,
    humor: false,
    //environment strengths
    goodCaregiver: false,
    supervision: false,
    extended: false,
    traditions: false,
    community: false,
    resources: false,
    noFamilyStress: false,
    noFamilyViolence: false,
    noSubstanceAbuse: false,
    consistentEmployment: false,
    valueEducation: false,
    strengthScore: 100,
    //scope questionnaire
    scope1: false,
    scope2: false,
    scopeSelector: 'YES',
    //need questionnaire
    needSelector: 0,
    needScore: 0,
  }

  friendList = ['friendAnger', 'friendWithdrawal', 'friendEsteem', 'friendAttendance', 'friendPerformance', 'friendPeerRelationships', 'friendAdultRelationships', 'friendHygiene', 'friendSexBehavior', 'friendFrustrated', 'friendDepression', 'friendCries', 'friendImpulsive', 'friendNervous'];

  teacherList = ['teacherAnger', 'teacherWithdrawal', 'teacherEsteem', 'teacherAttendance', 'teacherPerformance', 'teacherPeerRelationships', 'teacherAdultRelationships', 'teacherHygiene', 'teacherSexBehavior', 'teacherFrustrated', 'teacherDepression', 'teacherCries', 'teacherImpulsive', 'teacherNervous']

  riskList = ['singleParent', 'poverty', 'teenParent', 'neglect', 'abuse', 'foster', 'drugs', 'substance', 'violence', 'conflict', 'criminal', 'incarceration', 'criminalHome', 'gang', 'mentalIll', 'relocation', 'education', 'sibling', 'neighborhood', 'delinquentPeers', 'monitoring'];

  strengthsList = ['intelligent', 'efficacy', 'protectEsteem', 'interpersonal', 'initiative', 'frustration', 'soothe', 'help', 'temperament', 'hope', 'trying', 'likesSchool', 'humor', 'goodCaregiver', 'supervision', 'extended', 'traditions', 'community', 'resources', 'noFamilyStress', 'noFamilyViolence', 'noSubstanceAbuse', 'consistentEmployment', 'valueEducation'];

  scopeNeedList = [/*'scope1', 'scope2', 'scopeSelector',*/ 'needSelector'];

  handleCheckboxChange = evt => {
    let { name } = evt.target
    this.setState({ [name]: !this.state[name] })
  }

  handleTextboxChange = (evt) => {
    let { name, value } = evt.target
    this.setState({ [name]: value.toUpperCase() })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { createScore } = this.props;
    let scoreFriend = this.selectorScorer(this.state, this.friendList);
    let scoreTeacher = this.selectorScorer(this.state, this.teacherList);
    let scoreRisk = this.riskCheckboxScorer(this.state, this.riskList);
    let scoreStrength = this.strengthsCheckboxScorer(this.state, this.strengthsList);
    let scoreNeed = this.needScorer(this.state.needSelector);
    let scoreTotal = scoreFriend + scoreTeacher + scoreRisk + scoreStrength + scoreNeed;
    const pushObj = Object.assign(this.state, {
      friendScore: scoreFriend,
      teacherScore: scoreTeacher,
      riskScore: scoreRisk,
      strengthScore: scoreStrength,
      needScore: scoreNeed,
      totalScore: scoreTotal
    })
    createScore(pushObj)
  }

  getCount = (obj, list) => Object.keys(obj)
    .filter(key => list.includes(key) && obj[key] === true).length;

  riskCheckboxScorer = (obj, list) => {
    let checkedCount = this.getCount(obj, list);
    let value = 0;
    if (checkedCount > 0 && checkedCount <= 2) value = 25;
    if (checkedCount === 3) value = 50;
    if (checkedCount > 3 && checkedCount <= 5) value = 75;
    if (checkedCount >= 6) value = 100;
    return value;
  }

  strengthsCheckboxScorer = (obj, list) => {
    let checkedCount = this.getCount(obj, list);
    let value = 100;
    if (checkedCount >= 6) value = 0;
    if (checkedCount === 5) value = 25;
    if (checkedCount === 4) value = 50;
    if (checkedCount <= 3 && checkedCount > 0) value = 75;
    if (checkedCount === 0) value = 100;
    return value;
  }

  /*eslint complexity: 0*/
  selectorScorer = (obj, list) => {
    const scoreObj = {
      zeros: 0,
      ones: 0,
      twos: 0,
      threes: 0,
      fours: 0,
    }
    for (let key in obj) {
      if (list.includes(key)) {
        if (Number(obj[key]) === 0) scoreObj.zeros++;
        if (Number(obj[key]) === 1) scoreObj.ones++;
        if (Number(obj[key]) === 2) scoreObj.twos++;
        if (Number(obj[key]) === 3) scoreObj.threes++;
        if (Number(obj[key]) === 4) scoreObj.fours++;
      }
    }
    let sum = (scoreObj.ones + scoreObj.twos * 2 + scoreObj.threes * 3 + scoreObj.fours * 4);
    return sum;
  }

  needScorer = (val) => {
    if (Number(val) === 0) return 0;
    if (Number(val) === 1) return 25;
    if (Number(val) === 2) return 50;
    if (Number(val) === 3) return 75;
    if (Number(val) === 4) return 100;
  }

  /*eslint max-params: "off"*/
  finalScore = (name, scope, friend, teacher, risk, strength, need) => {
    let score;
    if (scope.toLowerCase() === 'no') {
      score = `${name} IS NOT IN SCOPE`
      return score;
    }
    score = friend + teacher + risk + strength + need;
    return `Total Score: ${score}`;
  }

  updateStateScores = () => {
    let scoreFriend = this.selectorScorer(this.state, this.friendList);
    let scoreTeacher = this.selectorScorer(this.state, this.teacherList);
    let scoreRisk = this.riskCheckboxScorer(this.state, this.riskList);
    let scoreStrength = this.strengthsCheckboxScorer(this.state, this.strengthsList);
    let scoreNeed = this.needScorer(this.state.needSelector);
    let scoreTotal = scoreFriend + scoreTeacher + scoreRisk + scoreStrength + scoreNeed;
    this.setState({
      friendScore: scoreFriend,
      teacherScore: scoreTeacher,
      riskScore: scoreRisk,
      strengthScore: scoreStrength,
      needScore: scoreNeed,
      totalScore: scoreTotal
    }, () => {
      console.log(
        'friendScore: ', this.state.friendScore + '\n',
        'teacherScore: ', this.state.teacherScore + '\n',
        'riskScore: ', this.state.riskScore + '\n',
        'strengthScore: ', this.state.strengthScore + '\n',
        'needScore: ', this.state.needScore + '\n',
        'totalScore: ', this.state.totalScore
      )
    })
  }


  render() {
    return (
      <div>
        <h1 className="section-header">Final Scoring for Child </h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="topline">
              School Name: <input
                className="scoring-topline-input"
                type="text"
                name="school"
                placeholder="Enter School Name"
                onChange={this.handleTextboxChange} />
              Child Name: <input
                className="scoring-topline-input"
                type="text"
                name="childName"
                placeholder="Enter Child Name"
                onChange={this.handleTextboxChange} />
              <div className="questionnaire-line">
                Gender:
                <select name="gender" onChange={this.handleTextboxChange}>
                  <option value="Boy">Boy</option>
                  <option value="Girl">Girl</option>
                </select>
              </div>
              <h1 id="total-score">{this.finalScore(this.state.childName, this.state.scopeSelector, this.selectorScorer(this.state, this.friendList), this.selectorScorer(this.state, this.teacherList), this.riskCheckboxScorer(this.state, this.riskList), this.strengthsCheckboxScorer(this.state, this.strengthsList), this.needScorer(this.state.needSelector))}</h1>
            </div>
            {/* FRIEND QUESTIONNAIRE */}
            <h2 className="section-header" id="scoring-header">Friend Questionnaire</h2>
            <div className="score-section" id="score">
              <div className="questionnaire-line">
                Aggressive Anger Problems
                <select name="friendAnger" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Social Withdrawal
                <select name="friendWithdrawal" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Low Self-Esteem
                <select name="friendEsteem" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor School Attendance
                <select name="friendAttendance" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Work Habits/Performance
                <select name="friendPerformance" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Peer Relationships
                <select name="friendPeerRelationships" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Adult Relationships
                <select name="friendAdultRelationships" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Hygiene/Health Concerns
                <select name="friendHygiene" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Sexualized Behavior
                <select name="friendSexBehavior" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Easily Frustrated/Poor Problem Solving
                <select name="friendFrustrated" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Depression/Sadness/Grief
                <select name="friendDepression" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Cries Easily/Often
                <select name="friendCries" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Impulse Control/Inattentive
                <select name="friendImpulsive" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Nervous Habits
                <select name="friendNervous" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <h1 className="score-display">Score: {this.selectorScorer(this.state, this.friendList)}</h1>
            </div>
            {/* TEACHER QUESTIONNAIRE */}
            <h2 className="section-header" id="scoring-header">Teacher Questionnaire</h2>
            <div className="score-section" id="score">
              <div className="questionnaire-line">
                Aggressive Anger Problems
                <select name="teacherAnger" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Social Withdrawal
                <select name="teacherWithdrawal" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Low Self-Esteem
                <select name="teacherEsteem" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor School Attendance
                <select name="teacherAttendance" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Work Habits/Performance
                <select name="teacherPerformance" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Peer Relationships
                <select name="teacherPeerRelationships" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Adult Relationships
                <select name="teacherAdultRelationships" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Hygiene/Health Concerns
                <select name="teacherHygiene" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Sexualized Behavior
                <select name="teacherSexBehavior" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Easily Frustrated/Poor Problem Solving
                <select name="teacherFrustrated" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Depression/Sadness/Grief
                <select name="teacherDepression" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Cries Easily/Often
                <select name="teacherCries" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Poor Impulse Control/Inattentive
                <select name="teacherImpulsive" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <div className="questionnaire-line">
                Nervous Habits
                <select name="teacherNervous" onChange={this.handleTextboxChange}>
                  <option value="0">Behavior Absent</option>
                  <option value="1">Not a Problem</option>
                  <option value="2">Mild Problem</option>
                  <option value="3">Moderate Problem</option>
                  <option value="4">Severe Problem</option>
                </select>
              </div>
              <h1 className="score-display">Score: {this.selectorScorer(this.state, this.teacherList)}</h1>
            </div>
            {/* ENVIRONMENTAL QUESTIONNAIRE */}
            <h2 className="section-header" id="scoring-header">Environmental Risks</h2>
            <div className="score-section" id="score">
              <div className="score-line">
                <input type="checkbox" name="singleParent" onChange={this.handleCheckboxChange} />
                Single Parent Family
                </div>
              <div className="score-line">
                <input type="checkbox" name="poverty" onChange={this.handleCheckboxChange} />
                Living in Poverty
                </div>
              <div className="score-line">
                <input type="checkbox" name="teenParent" onChange={this.handleCheckboxChange} />
                Parent Was a Teen Parent
                </div>
              <div className="score-line">
                <input type="checkbox" name="neglect" onChange={this.handleCheckboxChange} />
                History of Neglect
                </div>
              <div className="score-line">
                <input type="checkbox" name="abuse" onChange={this.handleCheckboxChange} />
                Physical/Sexual Abuse
                </div>
              <div className="score-line">
                <input type="checkbox" name="foster" onChange={this.handleCheckboxChange} />
                In Foster Care
                </div>
              <div className="score-line">
                <input type="checkbox" name="drugs" onChange={this.handleCheckboxChange} />
                Family History of Drug/Alcohol Abuse
                </div>
              <div className="score-line">
                <input type="checkbox" name="substance" onChange={this.handleCheckboxChange} />
                Substance Abuse in Home
                </div>
              <div className="score-line">
                <input type="checkbox" name="violence" onChange={this.handleCheckboxChange} />
                Domestic Violence in Home
                </div>
              <div className="score-line">
                <input type="checkbox" name="conflict" onChange={this.handleCheckboxChange} />
                Ongoing Family Conflict
                </div>
              <div className="score-line">
                <input type="checkbox" name="criminal" onChange={this.handleCheckboxChange} />
                Parent Criminal History
                </div>
              <div className="score-line">
                <input type="checkbox" name="incarceration" onChange={this.handleCheckboxChange} />
                Parent Incarcerated (past/present)
                </div>
              <div className="score-line">
                <input type="checkbox" name="criminalHome" onChange={this.handleCheckboxChange} />
                Criminal Activity in Home
                </div>
              <div className="score-line">
                <input type="checkbox" name="gang" onChange={this.handleCheckboxChange} />
                Family Gang Activity
                </div>
              <div className="score-line">
                <input type="checkbox" name="mentalIll" onChange={this.handleCheckboxChange} />
                Parent with Mental Illness
                </div>
              <div className="score-line">
                <input type="checkbox" name="relocation" onChange={this.handleCheckboxChange} />
                Frequest Relocation/Unstable Living
                </div>
              <div className="score-line">
                <input type="checkbox" name="education" onChange={this.handleCheckboxChange} />
                Low Value on Education
                </div>
              <div className="score-line">
                <input type="checkbox" name="sibling" onChange={this.handleCheckboxChange} />
                Older Sibling with High-Risk Behavior
                </div>
              <div className="score-line">
                <input type="checkbox" name="neighborhood" onChange={this.handleCheckboxChange} />
                High Crime/Violent Neighborhood
                </div>
              <div className="score-line">
                <input type="checkbox" name="delinquentPeers" onChange={this.handleCheckboxChange} />
                Exposure to Delinquent Peers
                </div>
              <div className="score-line">
                <input type="checkbox" name="monitoring" onChange={this.handleCheckboxChange} />
                Lack of Parental Monitoring
                </div>
              <div className="riskscore-div">
                <h1 className="risk-score">Score: {this.riskCheckboxScorer(this.state, this.riskList)}</h1>
              </div>
            </div>
            {/* STRENGTHS QUESTIONNAIRE */}
            <h2 className="section-header" id="scoring-header">Child Strengths</h2>
            <div className="score-section" id="score">
              <div className="score-line">
                <input type="checkbox" name="intelligent" onChange={this.handleCheckboxChange} />
                Appears Highly Intelligent
                </div>
              <div className="score-line">
                <input type="checkbox" name="efficacy" onChange={this.handleCheckboxChange} />
                Demonstrates Self-Efficacy
                </div>
              <div className="score-line">
                <input type="checkbox" name="protectEsteem" onChange={this.handleCheckboxChange} />
                Healthy Self Exteem
                </div>
              <div className="score-line">
                <input type="checkbox" name="interpersonal" onChange={this.handleCheckboxChange} />
                Good Interpersonal Skills
                </div>
              <div className="score-line">
                <input type="checkbox" name="initiative" onChange={this.handleCheckboxChange} />
                Takes Initiative
                </div>
              <div className="score-line">
                <input type="checkbox" name="frustration" onChange={this.handleCheckboxChange} />
                Age-appropriate Frustration
                </div>
              <div className="score-line">
                <input type="checkbox" name="soothe" onChange={this.handleCheckboxChange} />
                Ability to Self-soothe
                </div>
              <div className="score-line">
                <input type="checkbox" name="help" onChange={this.handleCheckboxChange} />
                Seeks Help/Support
                </div>
              <div className="score-line">
                <input type="checkbox" name="temperament" onChange={this.handleCheckboxChange} />
                Easy-Going Temperament
                </div>
              <div className="score-line">
                <input type="checkbox" name="hope" onChange={this.handleCheckboxChange} />
                Has a Sense of Hope
                </div>
              <div className="score-line">
                <input type="checkbox" name="trying" onChange={this.handleCheckboxChange} />
                Willing to Keep Trying
                </div>
              <div className="score-line">
                <input type="checkbox" name="likesSchool" onChange={this.handleCheckboxChange} />
                Likes School/Wants to Be There
                </div>
              <div className="score-line">
                <input type="checkbox" name="humor" onChange={this.handleCheckboxChange} />
                Has a Sense of Humor
                </div>
              <div className="score-line">
                <input type="checkbox" name="goodCaregiver" onChange={this.handleCheckboxChange} />
                Good Relationship w/ 1+ Caregiver
                </div>
              <div className="score-line">
                <input type="checkbox" name="supervision" onChange={this.handleCheckboxChange} />
                Family Monitors/Supervises Child
                </div>
              <div className="score-line">
                <input type="checkbox" name="extended" onChange={this.handleCheckboxChange} />
                Extended Family Support
                </div>
              <div className="score-line">
                <input type="checkbox" name="traditions" onChange={this.handleCheckboxChange} />
                Strong Positive Traditions
                </div>
              <div className="score-line">
                <input type="checkbox" name="community" onChange={this.handleCheckboxChange} />
                Strong Community Ties
                </div>
              <div className="score-line">
                <input type="checkbox" name="resources" onChange={this.handleCheckboxChange} />
                Access to Basic Resources
                </div>
              <div className="score-line">
                <input type="checkbox" name="noFamilyStress" onChange={this.handleCheckboxChange} />
                Family Manages Stress Well
                </div>
              <div className="score-line">
                <input type="checkbox" name="noFamilyViolence" onChange={this.handleCheckboxChange} />
                No Violence in Home
                </div>
              <div className="score-line">
                <input type="checkbox" name="noSubstanceAbuse" onChange={this.handleCheckboxChange} />
                No Family History of Substance Abuse
                </div>
              <div className="score-line">
                <input type="checkbox" name="consistentEmployment" onChange={this.handleCheckboxChange} />
                Caregivers Have Consistent Employment
                </div>
              <div className="score-line">
                <input type="checkbox" name="valueEducation" onChange={this.handleCheckboxChange} />
                Family Values Education
                </div>
              <div className="riskscore-div">
                <h1 className="risk-score">Score: {this.strengthsCheckboxScorer(this.state, this.strengthsList)}</h1>
              </div>
            </div>
            {/* SCOPE QUESTIONNAIRE */}
            <h2 className="section-header" id="scoring-header">Scope Questionnaire</h2>
            <div className="score-section" id="score">
              <div className="scope">
                <input type="checkbox" name="scope1" onChange={this.handleCheckboxChange} />
                1. One or more special and significant mental health needs appear to be present.
                <div className="scope-description">
                  <p>
                    a. Child is strongly suspected to have, or is diagnosed with, a developmental disability and either the level of training Friends receive is not sufficient to appropriately work with the child and/or the Friends of the Children program model seems inappropriate for working with the child.
                </p>
                  <p>
                    b. Child demonstrates behavior issues that are extreme, and the level of training Friends receive is not sufficient to keep the child, him/herself and/or others physically safe during one-on-one and other activities witha a Friend.
                </p>
                  <p>
                    c. Child is strongly suspected to have, or is diagnosed with, some other severe disorder, such as Pervasive Developmental Disorder, Fetal Alcohol Spectrum Disorder, Reactive Attachment Disorder, or a psychotic disorder, and the level of training Firends receive is not sufficient to appropriately work with the child and/or the Friends of the Children program model seems inappropriate for working with the child.
                </p>
                </div>
              </div>
              <div className="scope" id="scope-two">
                <input type="checkbox" name="scope2" onChange={this.handleCheckboxChange} />
                2. A special language needs is present, namely that the child does not speak English or he or she uses Spanish or American Sign Language exclusively, and no same sex Friends are available who speak Spanish or use American Sign Language.
              </div>
              <div className="scope" id="scope-selector">
                <select name="scopeSelector" onChange={this.handleTextboxChange}>
                  <option value="Yes">Yes (NO items above are checked)</option>
                  <option value="No">No (one or more items above are checked)</option>
                </select>
              </div>
            </div>
            {/* NEED QUESTIONNAIRE */}
            <h2 className="section-header" id="scoring-header">Need Questionnaire</h2>
            <div className="score-section" id="score">
              <div className="scope">
                Choose the statement that best estimates how effective the FOTC program is likely to be in terms of making a difference in the life of this child.
                <div id="need-selector">
                  <select name="needSelector" onChange={this.handleTextboxChange}>
                    <option value="0">The child will most likely succeed, and is not really in need of a Friend</option>
                    <option value="1">The child will most likely succeed, but could be hlped by a Friend</option>
                    <option value="2">It is unclear if the child will succeed, and a Friend might make the difference</option>
                    <option value="3">The child will most likely struggle to succeed, and a Friend is likely to help</option>
                    <option value="4">The child will most likely struggle greatly to succeed, and has a great need for a Friend</option>
                  </select>
                </div>
              </div>
              <div className="riskscore-div">
                <h1 className="risk-score">Score: {this.needScorer(this.state.needSelector)}</h1>
              </div>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div >
    )
  }
}

const mapState = state => ({ state })
const mapDispatch = dispatch => ({
  createScore: data => dispatch(addScore(data))
});

export default connect(mapState, mapDispatch)(ChildScoring);

