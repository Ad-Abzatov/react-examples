import React, { useState } from "react"

interface Item {
  id: number;
  name: string;
}

const initialItems: Item[] = [
  {id: 1, name: 'Item 1'},
  {id: 2, name: 'Item 2'},
  {id: 3, name: 'Item 3'},
]

const initialItems2: Item[] = [
  {id: 4, name: 'Item 4'},
  {id: 5, name: 'Item 5'},
  {id: 6, name: 'Item 6'},
]

const DragNDrop: React.FC = () => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [items2, setItems2] = useState<Item[]>(initialItems2);
  const [draggedItem, setDraggedItem] = useState<Item | null>(null);

  const handleDragStart = (index: Item) => {
    setDraggedItem(index)
  }

  const handleDragOver = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
  }

  const handleDrop = (index: number) => {
    if (draggedItem === null) return;
    const newItems = [...items];
    const [removed] = newItems.splice(draggedItem.id, 1);
    if (removed !== undefined) {
      newItems.splice(index, 0, removed);
    }
    setItems(newItems);
    setDraggedItem(null);
  }

  const handleDropTwo = (targetList: 'list1' | 'list2') => {
    if (!draggedItem) return;

    if (targetList === 'list1') {
      setItems((prevItems) => [...prevItems, draggedItem]);
      setItems2((prevItems) => prevItems.filter(item => item.id !== draggedItem.id))
    } else {
      setItems2((prevItems) => [...prevItems, draggedItem]);
      setItems((prevItems) => prevItems.filter(item => item.id !== draggedItem.id))
    }

    setDraggedItem(null);
  }

  return (
    <div>
      <h2>Здесь будет драг н дроп</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(item)}
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
            {item.name}
          </li>
        ))}
      </ul>
      <h2>Еще один драг н дроп</h2>
      <h3>Список 1</h3>
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(item)}
            onDragOver={handleDragOver}
            onDrop={() => handleDropTwo('list1')}
            style={{
              padding: '8px',
              margin: '4px',
              border: '1px solid black',
              backgroundColor: '#f0f0f0',
              cursor: 'move',
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <h3>Список 2</h3>
      <ul>
        {items2.map((item, index) => (
          <li
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(item)}
            onDragOver={handleDragOver}
            onDrop={() => handleDropTwo('list2')}
            style={{
              padding: '8px',
              margin: '4px',
              border: '1px solid black',
              backgroundColor: '#f0f0f0',
              cursor: 'move',
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DragNDrop
