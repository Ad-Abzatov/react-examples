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
    newItems.splice(index, 0, removed);
  }

  return (
    <div>
      Здесь будет драг н дроп
    </div>
  )
}

export default DragNDrop
