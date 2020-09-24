import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Ilayda"
        timeAgo="Today 03:23AM"
        avatar={faker.image.avatar()}
        content="Yo this is sick!"
      />
      <CommentDetail
        author="Dilara"
        timeAgo="Today 05:29AM"
        avatar={faker.image.avatar()}
        content="Mmmmm I like this"
      />
      <CommentDetail
        author="Muz"
        timeAgo="Yesterday 11:05PM"
        avatar={faker.image.avatar()}
        content="I'm ginger"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
