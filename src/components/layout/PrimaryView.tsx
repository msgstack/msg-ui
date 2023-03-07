import VirtualList from '@components/chat/VirtualList'
import React from 'react'

interface PrimaryViewProps {}

const PrimaryView: React.FC<PrimaryViewProps> = (props) => {
  return (
    <div className="p-workspace__primary_view">
      <div className="p-workspace__primary_view_contents">
        <div className="p-view_header"></div>
        <div className="p-file_drag_drop__container">
          <div role="presentation" style={{ display: 'contents' }}>
            <div className="p-workspace__primary_view_body">
              <VirtualList />
            </div>
            <div className="p-workspace__primary_view_footer"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimaryView
