import React from 'react'

import { Button, Image } from 'antd'

interface MessageAvatarProps {}

const MessageAvatar: React.FC<MessageAvatarProps> = (props) => {
  return (
    <div className="p-member_profile_hover_card">
      <Button className="c-button-unstyled c-message_kit__avatar c-avatar">
        {/* TODO: popover */}
        <Image
          src="/avatar/root-48.png"
          width={36}
          height={36}
          preview={false}
        ></Image>
      </Button>
    </div>
  )
}

export default MessageAvatar
