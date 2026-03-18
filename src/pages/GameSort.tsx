import { useState } from "react"
import SortBox from "../components/SortBox";

const GameSort = () => {
  const [moveBox, setMoveBox] = useState(0);
  const sortBoxes = [1, 2, 3, 4];
  const box = <div style={{border: '2px dashed #3dd43d', padding: '10px',}}>Перетащи</div>;
  const clickHandler = (item: number) => setMoveBox(item);

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      {sortBoxes.map((sortBox, index) => (
        <SortBox
          key={sortBox}
          onClickBox={() => clickHandler(index)}
        >
          {index === moveBox && box}
        </SortBox>
      ))}
    </div>
  )
}

export default GameSort
