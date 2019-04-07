import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

class App extends React.Component {
  getAvatarImage() {
    return faker.image.avatar();
  }

  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <h4>Warning</h4>
          Are you sure you want to do this?
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            authorName="Sam"
            authorImage={this.getAvatarImage()}
            postDate="Today at 4:45PM"
            message="Nice blog post!"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            authorName="Alex"
            authorImage={this.getAvatarImage()}
            postDate="Today at 2:00PM"
            message="Awesome blog post!"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            authorName="Jane"
            authorImage={this.getAvatarImage()}
            postDate="Yesterday at 3:59PM"
            message="Solid blog post!"
          />
        </ApprovalCard>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
