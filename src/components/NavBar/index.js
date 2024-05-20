// Write your code here.

import './index.css'

const NavBar = props => {
  const {topScore, isGameProgress, score} = props
  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        className="log-png"
        alt="emoji logo"
      />
      <h1>Emoji Game</h1>
      {isGameProgress && (
        <div className="scores-container">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
