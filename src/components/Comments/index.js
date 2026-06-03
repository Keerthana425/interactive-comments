import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    text: '',
    commentN: 0,
    commentsList: [],
  }

  addOnSubmmit = event => {
    event.preventDefault()
    const {name, text} = this.state
    const randomColor =
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ]
    const newContact = {
      id: uuidv4(),
      name,
      text,
      isLikede: false,
      color: false,
      bgcolor: randomColor,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newContact],
      name: '',
      text: '',
      commentN: prevState.commentN + 1,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
      commentN: prevState.commentN - 1,
    }))
  }

  likedChange = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachContact => {
        if (id === eachContact.id) {
          return {
            ...eachContact,
            isLikede: !eachContact.isLikede,
            color: !eachContact.color,
          }
        }
        return eachContact
      }),
    }))
  }

  render() {
    const {name, text, commentN, commentsList} = this.state
    return (
      <div className="main-container">
        <h1 className="commentName">Comments</h1>
        <p className="tech">Say something about 4.0 Technologies.</p>
        <div className="upp-container">
          <div className="left-container">
            <form>
              <input
                value={name}
                onChange={this.onChangeName}
                className="input"
                placeholder="Your Name"
              />
              <textarea
                value={text}
                className="texts"
                placeholder="Your Comments"
                onChange={this.onChangeText}
              />
              <button
                type="button"
                className="buttons"
                onClick={this.addOnSubmmit}
              >
                Add Comment
              </button>
            </form>
          </div>
          <div className="right-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="left-image"
              alt="comments"
            />
          </div>
        </div>
        <hr className="line" />
        <div className="down-container">
          <div className="commentss">
            <p className="commentNum">{commentN}</p>
            <p className="nameComment">Comments</p>
          </div>
          <ul className="list-item">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                deleteComment={this.deleteComment}
                likedChange={this.likedChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
// Write your code here
