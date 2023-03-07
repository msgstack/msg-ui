import React from 'react'
import MessageGutter from './MessageGutter'

interface MessagePaneProps {}

const MessagePane: React.FC<MessagePaneProps> = (props) => {
  return (
    <div className="c-message_kit__background p-message_pane_message__message">
      <div className="c-message_kit__background">
        <div className="c-message_kit__actions">
          <MessageGutter />
        </div>
      </div>
    </div>
  )
}

export default MessagePane
