import React from 'react'
import ComposerFormatting from './composer/ComposerFormatting'
import ComposerInput from './composer/ComposerInput'
import ComposerAttachments from './composer/ComposerAttachments'
import ComposerActions from './composer/ComposerActions'
import ComposerContext from './composer/ComposerContext'

interface InputMainProps {}

const InputMain: React.FC<InputMainProps> = (props) => {
  const [showContext, setShowContext] = React.useState(false)
  const [showAttachments, setShowAttachments] = React.useState(false)

  return (
    <div className="p-message_pane_input_inner_main">
      <div className="p-workspace__input" aria-label="composer" role="group">
        <div className="p-message_input__input_container c-wysiwyg_container">
          <div className="c-basic_container__body">
            {showContext && <ComposerContext />}

            <ComposerFormatting />

            <ComposerInput />

            {showAttachments && <ComposerAttachments />}

            <ComposerActions />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputMain
