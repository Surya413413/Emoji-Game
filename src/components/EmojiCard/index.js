// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisList, onClickedEmoji} = props
  const {id, emojiUrl, emojiName} = emojisList

  const clickEmojiButton = () => {
    onClickedEmoji(id)
  }

  return (
    <li className="emoji-second-constainer">
      <button onClick={clickEmojiButton} type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
