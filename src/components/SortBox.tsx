import React, { ReactNode } from "react"

interface SortBoxProps {
  children: ReactNode
}

const SortBox: React.FC<SortBoxProps> = ({children}) => {
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
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#d421219f'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#ccc'}
    >
      {children}
    </div>
  )
}

export default SortBox
