import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllData, fetchSelectData } from '../store';

class ChildComponent extends Component {

  state = {
    searchBar: '',
    year: 2018
  }

  childRiskFactors = [
    'anger', 'angerText', 'withdrawal', 'withdrawalText', 'esteem', 'esteemText', 'attendance', 'attendanceText', 'performance', 'performanceText', 'peerRelationships', 'peerRelationshipsText', 'adultRelationships', 'adultRelationshipsText', 'hygiene', 'hygieneText', 'sexBehavior', 'sexBehaviorText', 'frustrated', 'frustratedText', 'depression', 'depressionText', 'cries', 'criesText', 'impulsive', 'impulsiveText', 'nervous', 'nervousText', 'childRiskNotes'];

  envRiskFactors = [
    'singleParent', 'singleParentText', 'poverty', 'povertyText', 'teenParent', 'teenParentText', 'neglect', 'neglectText', 'abuse', 'abuseText', 'foster', 'fosterText', 'drugs', 'drugsText', 'substance', 'substanceText', 'violence', 'violenceText', 'conflict', 'conflictText', 'criminal', 'criminalText', 'incarceration', 'incarcerationText', 'criminalHome', 'criminalHomeText', 'gang', 'gangText', 'mentalIll', 'mentalIllText', 'relocation', 'relocationText', 'education', 'educationText', 'sibling', 'siblingText', 'neighborhood', 'neighborhoodText', 'delinquentPeers', 'delinquentPeersText', 'monitoring', 'monitoringText'];

  childProtectFactors = [
    'intelligent', 'intelligentText', 'efficacy', 'efficacyText', 'protectEsteem', 'protectEsteemText', 'interpersonal', 'interpersonalText', 'initiative', 'initiativeText', 'frustration', 'frustrationText', 'soothe', 'sootheText', 'help', 'helpText', 'temperament', 'temperamentText', 'hope', 'hopeText', 'trying', 'tryingText', 'likesSchool', 'likesSchoolText', 'humor', 'humorText', 'childProtectNotes'];

  envProtectFactors = [
    'goodCaregiver', 'goodCaregiverText', 'supervision', 'supervisionText', 'extended', 'extendedText', 'traditions', 'traditionsText', 'community', 'communityText', 'resources', 'resourcesText', 'familyStress', 'familyStressText', 'familyViolence', 'familyViolenceText']

  getCount = (obj, list) => Object.keys(obj)
    .filter(key => list.includes(key) && obj[key] === true &&
      !key.includes('Text') && !key.includes('Notes')).length;

  netScore = (childRisk, envRisk, childProtect, envProtect) => -(childRisk + envRisk) + (childProtect + envProtect)

  doubleSort = (a, b) => {
    if (a.school === b.school) {
      return a.childInitials < b.childInitials ? -1 : 1
    }
    else {
      return a.school > b.school ? 1 : -1;
    }
  }

  handleChange = (evt) => {
    const { value } = evt.target;
    this.setState({ searchBar: value })
  }

  handleTextboxChange = (evt) => {
    let { name, value } = evt.target
    this.setState({ [name]: value })
  }

  componentDidMount() {
    const { getAllData } = this.props;
    getAllData()
  }

  render() {
    const { allData, selectedData } = this.props.state.data;
    const inputVaue = this.state.searchBar.toLowerCase();
    const filteredChildren = allData.slice().reverse()
      .filter(student => Number(student.date.slice(0, 4)) === Number(this.state.year))
      .filter(child => {
        return (child.childInitials.toLowerCase().match(inputVaue) ||
          child.school.toLowerCase().match(inputVaue)
        )
      })
    return (
      <div>
        <h1>Welcome to the Child Notes Page</h1>
        <form id="search-component" onSubmit={this.handleSubmit}>
          Input Child Initials to Filter
          <input
            type="text"
            placeholder="Search by School or Child..."
            onChange={this.handleChange}
            id="searchbar" />
          <select name="year" onChange={this.handleTextboxChange}>
            <option value={2018}>2018</option>
            <option value={2019}>2019</option>
          </select>
        </form>
        <div>
          {
            filteredChildren &&
            filteredChildren.sort((a, b) => this.doubleSort(a, b))
              .map(student => {
                return (
                  <a href={`/children/${student.id}`} key={student.id}>
                    <div className="studentOverview">
                      <div id="notesRow1">
                        <h3 className="overviewElem">School: {student.school}</h3>
                        <h3 className="overviewElem">Student: {student.childInitials}</h3>
                        <h3 className="overviewElem">Observer: {student.observer}</h3>
                        <h3 className="overviewElem">Date: {student.date}</h3>
                      </div>
                      <div id="notesRow2">
                        <h4>Child Risk Factors: {this.getCount(student, this.childRiskFactors)}</h4>
                        <h4>Environmental Risk Factors: {this.getCount(student, this.envRiskFactors)}</h4>
                        <h4>Child Protective Factors: {this.getCount(student, this.childProtectFactors)}</h4>
                        <h4>Environmental Protective Factors: {this.getCount(student, this.envProtectFactors)}</h4>
                        <h4>Net Score: {
                          this.netScore(
                            this.getCount(student, this.childRiskFactors),
                            this.getCount(student, this.envRiskFactors),
                            this.getCount(student, this.childProtectFactors),
                            this.getCount(student, this.envProtectFactors))}
                        </h4>
                      </div>
                    </div>
                  </a>
                )
              })
          }
        </div>
      </div>
    )
  }
}

const mapState = state => ({ state })
const mapDispatch = dispatch => ({
  getAllData: () => dispatch(fetchAllData()),
  getSelectData: (initials) => dispatch(fetchSelectData(initials))
})

export default connect(mapState, mapDispatch)(ChildComponent);

