import React from 'react'

interface MessageBlocksProps {}

const MessageBlocks: React.FC<MessageBlocksProps> = (props) => {
  return (
    <div className="c-message__message_blocks">
      <div className="p-block_kit_renderer">
        <div className="p-rich_text_section">
          Satisfy your client's sugar cravings with Cupcake Ipsum. Pretty sweet
          right?
        </div>
      </div>
    </div>
  )
}

export default MessageBlocks
