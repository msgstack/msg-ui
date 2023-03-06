import React from 'react'

interface TopNavProps {}

const TopNav: React.FC<TopNavProps> = (props) => {
  return (
    <div className="p-top_nav">
      <div className="p-top_nav__sidebar">clock</div>
      <div className="p-top_nav__search__container">Search</div>
      <div className="p-top_nav__right">
        <div>tooltip</div>
        <div>avatar</div>
      </div>
    </div>
  )
}

export default TopNav
