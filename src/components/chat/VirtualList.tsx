import React from 'react'

import VirtualItem from './VirtualItem'

interface VirtualListProps {}

const VirtualList: React.FC<VirtualListProps> = (props) => {
  const messages = [1, 2, 3, 4, 5]

  return (
    <div className="c-virtual_list c-message_list">
      <div className="c-virtual_list__scroll_container">
        {messages.map((message, index) => (
          <VirtualItem key={index} />
        ))}
      </div>
    </div>
  )
}

export default VirtualList
