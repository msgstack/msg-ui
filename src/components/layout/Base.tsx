import React from 'react'
import { useSelector } from 'react-redux'
import { layoutSliceSelector } from '@store/layout'

import TopNav from './TopNav'
import PrimaryView from './PrimaryView'
import Sidebar from './Sidebar'
import Footer from './Footer'

interface BaseProps {
  children?: React.ReactNode
}

const Base: React.FC<BaseProps> = ({ children }) => {
  const layoutData = useSelector(layoutSliceSelector)

  return (
    <div className="p-client_container">
      <div className="p-client">
        <div className="p-workspace-layout">
          <TopNav />
          <Sidebar />
          <PrimaryView />
          {layoutData.hasFooter && <Footer />}
        </div>

        <div className="p-client__banners"></div>
      </div>
    </div>
  )
}

export default Base
