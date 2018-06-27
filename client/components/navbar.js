import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import styled from 'styled-components'

const Tab = styled.div`
// text-decoration: ${p => p.active ? 'underline' : 'none'};
// color: ${p => p.active ? 'black' : 'white'};
border-radius: 15px 15px;
background: ${p => p.active ? 'rgb(186, 207, 242)' : 'rgb(30, 144, 255)'};
}
`
const loggedInLinks = [{ link: 'home', text: 'Home' }, { link: 'notes', text: 'New Note' }, { link: 'children', text: 'Search Notes' }, { link: 'scoring', text: 'Child Scoring' }, { link: 'rankings', text: 'Rankings' }];


class Navbar extends Component {
  state = {
    active: 'home'
  }

  render() {
    const { handleClick, isLoggedIn } = this.props;
    const { active } = this.state;
    return (
      <div>
        <h1 id="navbar-header">Friends of the Children</h1>
        <nav>
          {isLoggedIn ? (
            <div id="navbar">
              {/* The navbar will show these links after you log in */}
              {
                loggedInLinks.map(tab => <Tab key={tab.link} onClick={() => this.setState({ active: tab.link })} active={active === tab.link}><Link to={'/' + tab.link}>{tab.text}</Link></Tab>)
              }
              <a href="#" onClick={handleClick}>
                Logout
                </a>
            </div>
          ) : (
              <div id="navbar">
                {/* The navbar will show these links before you log in */}
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
            )}
        </nav>
        <hr />
      </div>
    )

  }
}


/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
