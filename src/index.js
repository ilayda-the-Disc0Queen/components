import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <div>
        <h4>Warning!</h4>
        Are you sure you wanna do this homie?
      </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Ilayda"
          timeAgo="Today 03:23AM"
          avatar={faker.image.avatar()}
          content="Yo this is sick!"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Dilara"
          timeAgo="Today 05:29AM"
          avatar={faker.image.avatar()}
          content="Mmmmm I like this"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Muz"
          timeAgo="Yesterday 11:05PM"
          avatar={faker.image.avatar()}
          content="I'm ginger"/>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
