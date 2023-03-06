import React from 'react'

import { Button } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'

interface TopNavProps {}

const TopNav: React.FC<TopNavProps> = (props) => {
  return (
    <div className="p-top_nav">
      <div className="p-top_nav__sidebar">
        <Button
          icon={<ClockCircleOutlined />}
          type="text"
          className="p-top_nav__button p-top_nav__history-menu"
        />
      </div>
      <div className="p-top_nav__search__container">Search</div>
      <div className="p-top_nav__right">
        <div>tooltip</div>
        <div>avatar</div>
      </div>
    </div>
  )
}

export default TopNav
