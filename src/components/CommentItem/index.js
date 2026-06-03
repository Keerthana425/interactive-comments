// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, likedChange, deleteComment} = props
  const {name, text, id, isLikede, color, bgcolor} = commentDetails
  const dateee = formatDistanceToNow(new Date())
  const onLiked = () => {
    likedChange(id)
  }
  const onDelete = () => {
    deleteComment(id)
  }
  const chColor = color ? 'changeColor' : 'likename'
  const changeLike = isLikede
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  return (
    <li className="table-row">
      <div className="first-line">
        <p className={`icon ${bgcolor}`}>{name[0]}</p>
        <h1 className="name_comment">{name}</h1>
        <p className="timevlaue">{dateee}</p>
      </div>
      <p className="textanre">{text}</p>
      <div className="two">
        <div className="last0line">
          <img src={changeLike} className="image-like" alt="like" />
          <button className={chColor} type="button" onClick={onLiked}>
            Like
          </button>
        </div>
        <>
          <button type="button" onClick={onDelete} data-testid="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              className="deleteIcon"
              alt="delete"
            />
          </button>
        </>
      </div>
      <hr className="separator" />
    </li>
  )
}
export default CommentItem
