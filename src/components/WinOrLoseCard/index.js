// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, resetGame, isWonGame} = props

  const img = isWonGame
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const status = isWonGame ?  'You Won' : 'You Lose'
  const bestOrNot = isWonGame ? 'Best Score' : 'Score'

  return (
    <div className="WinOrLoss-container">
      <div>
        <h1>{status}</h1>
        <p>{bestOrNot}</p>
        <p>{score}/12</p>
        <button type="button" onClick={resetGame}>
          Play Again
        </button>
      </div>
      <img src={img} className="win-emoji" alt="win or lose" />
    </div>
  )
}
export default WinOrLoseCard
