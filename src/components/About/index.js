// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme} = value
      const aboutImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <div
          className={`about-element-container ${
            isDarkTheme && 'dark-about-element-container'
          }`}
        >
          <img className="about-image" src={aboutImgUrl} alt="about" />
          <h1>About</h1>
        </div>
      )
    }}
  </ThemeContext>
)

export default About
