import React from 'react'
import TopNav from './TopNav'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { layoutSliceSelector } from '@store/layout'

interface BaseProps {
  children?: React.ReactNode
}

const Base: React.FC<BaseProps> = ({ children }) => {
  const layoutData = useSelector(layoutSliceSelector)

  return (
    <>
      <TopNav />
      <div className="p-workspace-layout">{children}</div>
      {layoutData.hasFooter && <Footer />}
    </>
  )
}

export default Base
