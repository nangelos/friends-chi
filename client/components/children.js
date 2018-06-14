import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllData, fetchSelectData } from '../store';

class ChildComponent extends Component {

  state = {
    searchBar: ''
  }

  handleChange = (evt) => {
    const { value } = evt.target;
    this.setState({ searchBar: value })
    console.log(this.state)
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
    console.log(allData);
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

