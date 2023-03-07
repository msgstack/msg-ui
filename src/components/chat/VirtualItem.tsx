import MessagePane from '@components/message/MessagePane'
import React from 'react'

interface VirtualItemProps {}

const VirtualItem: React.FC<VirtualItemProps> = (props) => {
  return (
    <div className="c-virtual_list__item">
      <MessagePane />
    </div>
  )
}

export default VirtualItem
