import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isTrue: true}

  onSubmitFeedback = () => {
    this.setState({isTrue: false})
  }

  render() {
    const {resources} = this.props
    const {isTrue} = this.state

    return (
      <div className="container">
        <div className="feedback-container">
          {isTrue ? (
            <div>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <div className="img-container">
                {resources.emojis.map(eachItem => (
                  <ul>
                    <li
                      onClick={this.onSubmitFeedback}
                      className="button"
                      type="button"
                      key={eachItem.id}
                    >
                      <img
                        src={eachItem.imageUrl}
                        alt={eachItem.name}
                        className="image"
                      />
                      <p className="name">{eachItem.name}</p>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ) : (
            <div className="feed-container">
              <img
                className="symbol"
                src={resources.loveEmojiUrl}
                alt="love emoji"
              />
              <h1 className="thankYou">Thank You!</h1>
              <p className="para">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
