import React from 'react';

export default class CommentDetail extends React.Component {
  render() {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={this.props.authorImage}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            {this.props.authorName}
          </a>
          <div className="metadata">
            <span className="date">{this.props.postDate}</span>
          </div>
          <div className="text">{this.props.message}</div>
        </div>
      </div>
    );
  }
}
