import React from 'react'

interface InputBottomProps {}

const InputBottom: React.FC<InputBottomProps> = (props) => {
  return (
    <div className="p-message_pane_input_inner_bottom p-notification_bar">
      Someone is typing...
    </div>
  )
}

export default InputBottom
