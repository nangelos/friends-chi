import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addScore } from '../../store'
import { friendList, teacherList, strengthsList, riskList } from '../../constants'
import {
  ScoringStrengths,
  ScoringNeed,
  ScoringScope,
  ScoringFriend,
  ScoringTeacher,
  ScoringRisks,
  ScoringHeader
} from '../index'

class ChildScoring extends Component {
  constructor() {
    super()
    this.state = {
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
      // teacher questionnaire
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
      // //child strengths
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
      needScore: 0
    }
  }

  handleCheckboxChange = evt => {
    let { name } = evt.target
    this.setState({ [name]: !this.state[name] })
  }

  handleTextboxChange = evt => {
    let { name, value } = evt.target
    this.setState({ [name]: value.toUpperCase() })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const { createScore } = this.props
    const { scopeSelector } = this.state
    let scoreFriend = this.selectorScorer(friendList)
    let scoreTeacher = this.selectorScorer(teacherList)
    let scoreRisk = this.riskCheckboxScorer(riskList)
    let scoreStrength = this.strengthsCheckboxScorer(strengthsList)
    let scoreNeed = this.needScorer(this.state.needSelector)
    let scoreTotal = scoreFriend + scoreTeacher + scoreRisk + scoreStrength + scoreNeed
    if (scopeSelector.toLowerCase() === 'no') scoreTotal = -100
    const pushObj = Object.assign(this.state, {
      friendScore: scoreFriend,
      teacherScore: scoreTeacher,
      riskScore: scoreRisk,
      strengthScore: scoreStrength,
      needScore: scoreNeed,
      totalScore: scoreTotal
    })
    createScore(pushObj)
    window.location.reload(false)
  }

  getCount = (obj, list) => Object.keys(obj)
    .filter(key => list
      .includes(key) && obj[key] === true).length

  riskCheckboxScorer = (list) => {
    const obj = this.state
    let checkedCount = this.getCount(obj, list)
    let value = 0
    if (checkedCount > 0 && checkedCount <= 2) value = 25
    if (checkedCount === 3) value = 50
    if (checkedCount > 3 && checkedCount <= 5) value = 75
    if (checkedCount >= 6) value = 100
    return value
  }

  strengthsCheckboxScorer = (list) => {
    const obj = this.state
    let checkedCount = this.getCount(obj, list)
    let value = 100
    if (checkedCount >= 6) value = 0
    if (checkedCount === 5) value = 25
    if (checkedCount === 4) value = 50
    if (checkedCount <= 3 && checkedCount > 0) value = 75
    if (checkedCount === 0) value = 100
    return value
  }

  selectorScorer = (list) => {
    const scoreObj = {
      zeros: 0,
      ones: 0,
      twos: 0,
      threes: 0,
      fours: 0
    }
    const obj = this.state
    for (let key in obj) {
      if (list.includes(key)) {
        if (Number(obj[key]) === 0) scoreObj.zeros++
        if (Number(obj[key]) === 1) scoreObj.ones++
        if (Number(obj[key]) === 2) scoreObj.twos++
        if (Number(obj[key]) === 3) scoreObj.threes++
        if (Number(obj[key]) === 4) scoreObj.fours++
      }
    }
    let sum = scoreObj.ones + scoreObj.twos * 2 + scoreObj.threes * 3 + scoreObj.fours * 4
    return sum
  }

  needScorer = val => {
    if (Number(val) === 0) return 0
    if (Number(val) === 1) return 25
    if (Number(val) === 2) return 50
    if (Number(val) === 3) return 75
    if (Number(val) === 4) return 100
  }

  /*eslint max-params: "off"*/
  finalScore = (name, scope, friend, teacher, risk, strength, need) => {
    let score
    if (scope.toLowerCase() === 'no') {
      score = `${name} IS NOT IN SCOPE`
      return score
    } else {
      score = friend + teacher + risk + strength + need
      return `Total Score: ${score}`
    }
  }

  render() {
    return (
      <div>
        <h1 className="section-header">Final Scoring for Child </h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <ScoringHeader
              childName={this.state.childName}
              friendList={friendList}
              teacherList={teacherList}
              riskList={riskList}
              strengthsList={strengthsList}
              handleTextboxChange={this.handleTextboxChange}
              scopeSelector={this.state.scopeSelector}
              selectorScorer={this.selectorScorer}
              riskCheckboxScorer={this.riskCheckboxScorer}
              strengthsCheckboxScorer={this.strengthsCheckboxScorer}
              needScorer={this.needScorer}
              finalScore={this.finalScore}
              {...this.state}
            />
            <ScoringFriend
              handleTextboxChange={this.handleTextboxChange}
              selectorScorer={this.selectorScorer}
              friendList={friendList}
              {...this.state}
            />
            <ScoringTeacher
              handleTextboxChange={this.handleTextboxChange}
              selectorScorer={this.selectorScorer}
              teacherList={teacherList}
              {...this.state}
            />
            <ScoringRisks
              riskCheckboxScorer={this.riskCheckboxScorer}
              riskList={riskList}
              handleCheckboxChange={this.handleCheckboxChange}
              {...this.state}
            />
            <ScoringStrengths
              strengthsCheckboxScorer={this.strengthsCheckboxScorer}
              strengthsList={strengthsList}
              handleCheckboxChange={this.handleCheckboxChange}
              {...this.state}
            />
            <ScoringScope handleTextboxChange={this.handleTextboxChange} />
            <ScoringNeed
              needScorer={this.needScorer}
              handleTextboxChange={this.handleTextboxChange}
              needSelector={this.state.needSelector}
              needScore={this.state.needScore}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

const mapState = state => ({ state })

const mapDispatch = dispatch => ({
  createScore: data => dispatch(addScore(data))
})

export default connect(mapState, mapDispatch)(ChildScoring)
