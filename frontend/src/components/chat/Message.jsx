import React from "react";

function Message({ text, sender }) {
  const messageClassName = `message ${
    sender === "user" ? "user-message" : "bot-message"
  }`;

  return <div className={messageClassName}>{text}</div>;
}

export default Message;
