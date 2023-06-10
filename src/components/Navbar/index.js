// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeChangeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={`navbar ${isDarkTheme && 'dark'}`}>
          <img className="logo" alt="website logo" src={websiteLogoUrl} />
          <ul className="nav-item-list">
            <Link className="link-component" to="/">
              <li className={`navbar-item ${isDarkTheme && 'dark'}`}>Home</li>
            </Link>
            <Link className="link-component" to="/about">
              <li className={`navbar-item ${isDarkTheme && 'dark'}`}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="theme-changer-button"
            data-testId="theme"
            onClick={toggleTheme}
          >
            <img
              className="theme-changer-image"
              alt="theme"
              src={themeChangeUrl}
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
