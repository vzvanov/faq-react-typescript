import React from "react";

const Message = ({ messageType, message }) => {
  return (
    <div className={messageType}>
      {message}
    </div>
  );
};

export default Message;