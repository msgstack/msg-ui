import classNames from 'classnames'
import React, { useState } from 'react'

import { MentionsInput, Mention, OnChangeHandlerFunc } from 'react-mentions'

interface ComposerInputProps {}

const ComposerInput: React.FC<ComposerInputProps> = (props) => {
  const users = [
    { id: '1', display: 'John Smith' },
    { id: '2', display: 'Jane Doe' },
  ]

  const [value, setValue] = useState('')

  const onChangeInput: OnChangeHandlerFunc = (event, newValue) => {
    setValue(newValue)
  }

  const handleSetValue = (newValue: string) => {
    console.log(newValue)
    setValue('')
  }

  const onKeydownInput = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSetValue(value)

      return
    }
  }

  return (
    <div className="c-texty_input__container">
      <div className="c-texty_input">
        <MentionsInput
          value={value}
          className={classNames('ql-editor', { ['ql-blank']: !value })}
          onChange={onChangeInput}
          onKeyDown={onKeydownInput}
        >
          <Mention trigger="@" data={users} />
        </MentionsInput>
        <div className="ql-clipboard" />
        <div className="ql-placeholder">
          <div className="c-texty_input__placeholder">Message _kong</div>
        </div>
      </div>
    </div>
  )
}

export default ComposerInput
