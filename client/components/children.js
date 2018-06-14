import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllData, fetchSelectData } from '../store';

class ChildComponent extends Component {

  state = {
    searchBar: ''
  }

  childRiskFactors = [
    'anger', 'angerText', 'withdrawal', 'withdrawalText', 'esteem', 'esteemText', 'attendance', 'attendanceText', 'performance', 'performanceText', 'peerRelationships', 'peerRelationshipsText', 'adultRelationships', 'adultRelationshipsText', 'hygiene', 'hygieneText', 'sexBehavior', 'sexBehaviorText', 'frustrated', 'frustratedText', 'depression', 'depressionText', 'cries', 'criesText', 'impulsive', 'impulsiveText', 'nervous', 'nervousText', 'childRiskNotes'];

  envRiskFactors = [
    'singleParent', 'singleParentText', 'poverty', 'povertyText', 'teenParent', 'teenParentText', 'neglect', 'neglectText', 'abuse', 'abuseText', 'foster', 'fosterText', 'drugs', 'drugsText', 'substance', 'substanceText', 'violence', 'violenceText', 'conflict', 'conflictText', 'criminal', 'criminalText', 'incarceration', 'incarcerationText', 'criminalHome', 'criminalHomeText', 'gang', 'gangText', 'mentalIll', 'mentalIllText', 'relocation', 'relocationText', 'education', 'educationText', 'sibling', 'siblingText', 'neighborhood', 'neighborhoodText', 'delinquentPeers', 'delinquentPeersText', 'monitoring', 'monitoringText'];

  childProtectFactors = [
    'intelligent', 'intelligentText', 'efficacy', 'efficacyText', 'protectEsteem', 'protectEsteemText', 'interpersonal', 'interpersonalText', 'initiative', 'initiativeText', 'frustration', 'frustrationText', 'soothe', 'sootheText', 'help', 'helpText', 'temperament', 'temperamentText', 'hope', 'hopeText', 'trying', 'tryingText', 'likesSchool', 'likesSchoolText', 'humor', 'humorText', 'childProtectNotes'];

  envProtectFactors = [
    'goodCaregiver', 'goodCaregiverText', 'supervision', 'supervisionText', 'extended', 'extendedText', 'traditions', 'traditionsText', 'community', 'communityText', 'resources', 'resourcesText', 'familyStress', 'familyStressText', 'familyViolence', 'familyViolenceText']

  handleChange = (evt) => {
    const { value } = evt.target;
    this.setState({ searchBar: value })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('handling submit')
  }

  componentDidMount() {
    console.log(this.props)
    const { getAllData } = this.props;
    getAllData()
  }

  render() {
    const { allData, selectedData } = this.props.state.data;
    return (
      <div>
        <h1>Welcome to the Child Search Page</h1>
        <form onSubmit={this.handleSubmit}>
          Input Child Initials to Search
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
        <div>
          {
            allData &&
            allData.map(student => {
              return (
                <a href={`/children/${student.childInitials}`} key={student.id}>
                  <div className="studentOverview">
                    <h3 className="overviewElem">School: {student.school}</h3>
                    <h3 className="overviewElem">Student: {student.childInitials}</h3>
                    <h3>Child Risk Factors: {Object.keys(student).filter(key => this.childRiskFactors.includes(key) && student[key] !== false && student[key] !== null).length}</h3>
                    <h3>Environmental Risk Factors: {Object.keys(student).filter(key => this.envRiskFactors.includes(key) && student[key] !== false && student[key] !== null).length}</h3>
                    <h3>Child Protective Factors: {Object.keys(student).filter(key => this.childProtectFactors.includes(key) && student[key] !== false && student[key] !== null).length}</h3>
                    <h3>Environmental Protective Factors: {Object.keys(student).filter(key => this.envProtectFactors.includes(key) && student[key] !== false && student[key] !== null).length}</h3>
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

