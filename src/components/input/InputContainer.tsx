import React from 'react'
import InputTop from './InputTop'
import InputMain from './InputMain'
import InputBottom from './InputBottom'

interface InputContainerProps {}

const InputContainer: React.FC<InputContainerProps> = (props) => {
  return (
    <div className="p-message_pane_input__container">
      <div className="p-message_pane_input__inner">
        <InputTop />
        <InputMain />
        <InputBottom />
      </div>
    </div>
  )
}

export default InputContainer
