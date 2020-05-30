import React from "react"

const LinkFooter = ({ title, link}) => (
  <h4 style={{ margin: 10, alignItems: 'center' }}>
    <a
      href={link}
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        color: `#ea4646`,
        textDecoration: `none`,
      }}
    >
      { title }
    </a>
  </h4>
)

const Footer = () => (
  <footer
    style={{
      color: `#ea4646`,
      margin: `1.45rem 0`,
      padding: `1.45rem 1.0875rem`,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-end'
    }}
  >
    <div 
      style={{
        display: 'flex',
        alignItems: 'space-around'
      }}
    >
      <LinkFooter title="Medium" link="https://medium.com/@adrielerodr" />
      <LinkFooter title="Github" link="https://github.com/adrielerodr" />
      <LinkFooter title="Twitter" link="https://twitter.com/adrielerodr" />
      <LinkFooter title="Instagram" link="https://www.instagram.com/adrielerodr/" />
    </div>
    <h4 
      style={{
        margin: 0
      }}
    > 
      © {new Date().getFullYear()} Adriele Rodrigues
    </h4>
  </footer>
)

export default Footer;
