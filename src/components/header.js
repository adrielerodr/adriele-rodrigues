import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const TabNavigation = ({ title, link}) => (
  <h4 style={{ margin: 10, alignItems: 'center' }}>
    <Link
      to={link}
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      { title }
    </Link>
  </h4>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ea4646`,
      marginBottom: `1.45rem`,
      padding: `1.45rem 1.0875rem`,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-end'
    }}
  >
    <h3 style={{ display: 'flex', alignItems: 'center', margin: 10 }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        { siteTitle }
      </Link>
    </h3>
    <div 
      style={{
        display: 'flex',
        alignItems: 'space-around'
      }}
    >
      <TabNavigation title="Blog" link="/blog" />
      <TabNavigation title="About" link="/about" />
      <TabNavigation title="Leituras" link="/reading" />
      <TabNavigation title="Comunidades" link="/communities" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
