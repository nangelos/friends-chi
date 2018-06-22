import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { email } = props;
  let name = email.slice(0, email.search('@'))
    .split('')
  name[0] = name[0].toUpperCase()
  name = name.join('');

  return (
    <div>
      <h3>Welcome, {name}.</h3>
      <p>
        This is the online portal for Friends of the Children Chicago.
        You can use this portal for taking notes during in-class observations. Use the 'New Note' tab to add a new note for a student, and once that note is submitted, it will be available for review on the 'Search Notes' tab . All notes will be available to other users, making it easy to review notes when it comes time to discuss prospective candidates for selection into the program. You can use the 'Child Scoring' tab to help input data when the time comes to choose candidates, and the 'Rankings' tab will automatically aggregate all scores, rank students in order from most in need to least in need, and separate them by gender.
      </p>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
