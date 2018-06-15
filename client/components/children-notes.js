import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllData, fetchSelectData } from '../store';


class ChildNotes extends Component {

  componentDidMount() {
    const { getChildData } = this.props;
    const { pathname } = this.props.location;
    getChildData(pathname.slice(10))
  }

  getTrue = (obj) => {
    return Object.keys(obj)
      .filter(key => obj[key] === true || typeof (obj[key] === 'string' && obj[key] !== null))
  }

  render() {
    console.log(this.props);
    const childData = this.props.state.data.selectedData[0];
    console.log(childData);
    return (
      <div>
        <h1>Here are the child notes</h1>
        <div>
          {
            childData &&
            this.getTrue(childData)
              .map(point => {
                return (
                  <p>{point}</p>
                )
              })
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
