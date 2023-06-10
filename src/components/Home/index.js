// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme} = value
      const homeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      return (
        <div
          className={`home-element-container ${
            isDarkTheme && 'dark-about-element-container'
          }`}
        >
          <img className="home-image" src={homeImgUrl} alt="home" />
          <h1>Home</h1>
        </div>
      )
    }}
  </ThemeContext>
)

export default Home
