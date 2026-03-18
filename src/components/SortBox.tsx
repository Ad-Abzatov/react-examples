import React, { MouseEventHandler, ReactNode } from "react"

interface SortBoxProps {
  children: ReactNode,
  onClickBox: MouseEventHandler<HTMLDivElement> | undefined,
}

const SortBox: React.FC<SortBoxProps> = ({children, onClickBox}) => {
  return (
    <div
      style={{
        minHeight: '100px',
        border: '2px dashed #ccc',
        padding: '10px',
        margin: '10px 10px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        width: '200px',
        flexDirection: 'column-reverse',
        display: 'flex',
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#d421219f'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#ccc'}
      onClick={onClickBox}
    >
      {children}
    </div>
  )
}

export default SortBox
