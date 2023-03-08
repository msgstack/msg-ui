import { SendOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

interface ComposerActionsProps {}

const ComposerActions: React.FC<ComposerActionsProps> = (props) => {
  const onSendMessage = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
  }

  return (
    <div className="c-wysiwyg_container__actions">
      <div className="c-wysiwyg_container__prefix">prefix</div>
      <div className="c-wysiwyg_container__toolbar">toolbar</div>
      <div className="c-wysiwyg_container__suffix">
        <div className="c-wysiwyg_container__send_button--with_options">
          <Button
            icon={<SendOutlined />}
            className="c-wysiwyg_container__button c-wysiwyg_container__button--send"
            onClick={onSendMessage}
          />
        </div>
      </div>
    </div>
  )
}

export default ComposerActions
