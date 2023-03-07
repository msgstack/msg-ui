import React from 'react'

interface MessageSenderProps {}

const MessageSender: React.FC<MessageSenderProps> = (props) => {
  // TODO: date js

  return (
    <div className="c-message__sender c-message_kit_sender">
      {/* TODO: popover */}
      <button className="c-message__sender_button">Stack Root</button>
      <a href="#" className="c-message__sender_timestamp">
        <span className="c-message__sender_timestamp__label">4:12 PM</span>
      </a>
    </div>
  )
}

export default MessageSender
