import React, { useState } from "react"

const DragNDrop = () => {
  const [items, setItems] = useState(['Item1', 'Item2', 'Item3']);
  const [draggedItem, setDraggedItem] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedItem(index)
  }

  const handleDragOver = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
  }

  const handleDrop = (index: number) => {
    if (draggedItem === null) return;
    const newItems = [...items];
    const [removed] = newItems.splice(draggedItem, 1);
    if (removed !== undefined) {
      newItems.splice(index, 0, removed);
    }
    setItems(newItems);
    setDraggedItem(null);
  }

  return (
    <div>
      <h2>Здесь будет драг н дроп</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            style={{
              padding: '8px',
              margin: '4px',
              border: '1px solid black',
              backgroundColor: '#f0f0f0',
              cursor: 'move',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DragNDrop
