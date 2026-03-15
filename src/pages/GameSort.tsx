import { useState } from "react"

const GameSort = () => {
  const [moveBox, setMoveBox] = useState(true);
  const box = <div style={{border: '2px dashed #3dd43d', padding: '10px',}}>Перетащи</div>;
  const clickHandler = () => setMoveBox(!moveBox);

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
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
      onClick={() => {
        if (!moveBox) {
          clickHandler()
        }
      }}
    >
      {moveBox ? box : null}
    </div>
    <div
      style={{
        minHeight: '100px',
        border: '2px dashed #ccc',
        padding: '10px',
        margin: '10px 0',
        cursor: 'pointer',
        transition: 'all 0.2s',
        width: '200px'
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#d421219f'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#ccc'}
      onClick={() => {
        if (moveBox) {
          clickHandler()
        }
      }}
    >
      {!moveBox ? box : null}
    </div>
    </div>
  )
}

export default GameSort