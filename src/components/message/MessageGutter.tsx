import React from 'react'
import MessageAvatar from './MessageAvatar'
import MessageSender from './MessageSender'
import MessageBlocks from './MessageBlocks'

interface MessageGutterProps {}

const MessageGutter: React.FC<MessageGutterProps> = (props) => {
  return (
    <div className="c-message_kit__gutter">
      <div className="c-message_kit__gutter__left">
        <MessageAvatar />
      </div>
      <div className="c-message_kit__gutter__right">
        <MessageSender />
        <MessageBlocks />
      </div>
    </div>
  )
}

export default MessageGutter
