import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class NavBar extends Component {
  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }

  render() {
    return (
      <div>
        <Menu inverted color='orange' >
          <Link to='/'>
            <Menu.Item
              name='Bomber Beers And Breweries' active={this.activeItem('/')}
              style={styles.navMenuItem}
             />
          </Link>
          <Link to='/beers'>
            <Menu.Item name='beers' active={this.activeItem('/beers')} />
          </Link>
          <Link to='/breweries'>
            <Menu.Item name='breweries' active={this.activeItem('/breweries')} />
          </Link>
          <Menu.Menu position='right'>
            <Link to='/'>
              <Menu.Item name='DPS React Brew Bible' />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

const styles = {
  navMenuItem: {
    fontStyle: 'bold',
    fontWeight: '600',
    fontSize: '2em',
  },
}

export default withRouter(NavBar);
