import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllScores } from '../store';

class Rankings extends Component {
  state = {
    allScores: [],
  }

  componentDidMount() {
    const { getRankings } = this.props;
    getRankings();
  }

  sortChildren = (a, b) => {
    return a.totalScore < b.totalScore;
  }

  getChildRankings = (arr, gender) =>
    arr
      .filter(child => child.gender === gender)
      .sort(this.sortChildren)

  render() {
    const { allScores } = this.props.state.scoring;
    const boys = this.getChildRankings(allScores, 'BOY');
    const girls = this.getChildRankings(allScores, 'GIRL');
    return (
      <div>
        <h1 className="rankings">Rankings of Students</h1>
        <div>
          <h2 className="rankings">Boy Rankings</h2>
          <div>
            {
              boys &&
              boys.map((child, idx) => {
                return (
                  <div key={child.id} className="ranking-element" >
                    <h3 className="ranking-number">{idx + 1}.</h3>
                    <h3 className="ranking-name">Name: {child.childName}</h3>
                    <h3 className="ranking-school">School: {child.school}</h3>
                    <h3 className="ranking-score">Total Score: {child.totalScore}</h3>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div>
          <h2 className="rankings">Girl Rankings</h2>
          <div>
            {
              girls &&
              girls.map((child, idx) => {
                return (
                  <div key={child.id} className="ranking-element" >
                    <h3 className="ranking-number">{idx + 1}.</h3>
                    <h3 className="ranking-name">Name: {child.childName}</h3>
                    <h3 className="ranking-school">School: {child.school}</h3>
                    <h3 className="ranking-score">Total Score: {child.totalScore}</h3>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({ state });
const mapDispatch = dispatch => ({
  getRankings: () => dispatch(fetchAllScores())
})

export default connect(mapState, mapDispatch)(Rankings);

