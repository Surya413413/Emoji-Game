/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {emojiListState: [], topScore: 0, isGameProgress: true}

  resetGame = () => {
    this.setState({emojiListState: [], isGameProgress: true})
  }

  scoreCard = () => {
    const {emojiListState} = this.state
    const {emojisList} = this.props
    const isWonGame = emojiListState.length === emojisList.length
    return (
      <div className="WinOrLoseCard-container">
      <WinOrLoseCard
        resetGame={this.resetGame}
        score={emojiListState.length}
        isWonGame={isWonGame}
      />
      </div>
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > newTopScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameProgress: false})
  }

  onClickedEmoji = id => {
    const {emojiListState} = this.state
    const {emojisList} = this.props
    const clickedEmojiLength = emojiListState.length
    const isEmojiId = emojiListState.includes(id)

    if (isEmojiId) {
      this.finishGameAndSetTopScore(clickedEmojiLength)
    } else {
      if (clickedEmojiLength === emojisList.length - 1) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previous => ({
        emojiListState: [...previous.emojiListState, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {emojiListState, topScore, isGameProgress} = this.state
    const {emojisList} = this.props
    const shuffledEmojisListUpdated = this.shuffledEmojisList()

    return (
      <div className="app-container">
        <NavBar
          topScore={topScore}
          isGameProgress={isGameProgress}
          score={emojiListState.length}
        />

        <div className="emoji-body-container">
          {isGameProgress ? (
            <ul className="undored-list-container">
              {shuffledEmojisListUpdated.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojisList={eachEmoji}
                  onClickedEmoji={this.onClickedEmoji}
                />
              ))}
            </ul>
          ) : (
            this.scoreCard()
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
