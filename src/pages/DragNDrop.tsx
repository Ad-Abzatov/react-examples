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

  const handleDragStart = (event: React.DragEvent<HTMLLIElement>, item: Item) => {
    setDraggedItem(item);
    event.dataTransfer.effectAllowed = 'move';
  }

  const handleDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }

  const handleDrop = (event: React.DragEvent<HTMLElement>, index: number, list: Item[]) => {
    event.preventDefault();
    if (!draggedItem) return;

    const draggedIndex = list.findIndex(item => item.id === draggedItem.id);
    if (draggedIndex === -1 || draggedIndex === index) return;

    const newList = [...list];
    const [movedItem] = newList.splice(draggedIndex, 1);
    if (movedItem !== undefined) {
      newList.splice(index, 0, movedItem);
    }

    if (list === items) {
      setItems(newList)
    } else {
      setItems2(newList)
    }

    setDraggedItem(null);
  }

  const handleDropTwo = (event: React.DragEvent<HTMLElement>, targetList: 'list1' | 'list2', dropIndex: number) => {
    event.preventDefault();
    if (!draggedItem) return;

    setItems(prev => prev.filter(item => item.id !== draggedItem.id));
    setItems2(prev => prev.filter(item => item.id !== draggedItem.id));

    const targetItems = targetList === 'list1' ? [...items] : [...items2];
    targetItems.splice(dropIndex, 0, draggedItem);

    if (targetList === 'list1') {
      setItems(targetItems);
    } else {
      setItems2(targetItems);
    }

    setDraggedItem(null);
  }

  const renderList = (listItems: Item[], listName: 'list1' | 'list2') => (
    <ul
      style={{
        minHeight: '100px',
        border: '2px dashed #ccc',
        padding: '10px',
        margin: '10px 0'
      }}
    >
      {listItems.map((item, index) => (
        <li
          key={item.id}
          draggable
          onDragStart={(e) => handleDragStart(e, item)}
          onDragOver={handleDragOver}
          onDrop={(event) => {
            if (listName === 'list1') {
              handleDrop(event, index, items)
            } else {
              handleDrop(event, index, items2)
            }
          }}
          style={{
            padding: '12px',
            margin: '8px 0',
            border: '2px solid #ddd',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            cursor: 'grab',
            transition: 'all 0.2s',
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  )

  return (
    <div style={{ padding: '40px', maxWidth: '600px'}}>
      <h2 style={{ marginBottom: '30px'}}>Drag & Drop между списками</h2>

      <div>
        <h3 style={{marginBottom: '15px', color: '#666'}}>Список 1</h3>
        <div
          onDragOver={handleDragOver}
          onDrop={(e) => handleDropTwo(e, 'list1', items.length)}
          style={{
            minHeight: '200px',
            border: '3px dashed #007bff',
            padding: '20px',
            borderRadius: '8px'
          }}
        >
          {renderList(items, 'list1')}
        </div>
      </div>

      <div>
        <h3 style={{marginBottom: '15px', color: '#666'}}>Список 2</h3>
        <div
          onDragOver={handleDragOver}
          onDrop={(e) => handleDropTwo(e, 'list2', items2.length)}
          style={{
            minHeight: '200px',
            border: '3px dashed #28a745',
            padding: '20px',
            borderRadius: '8px'
          }}
        >
          {renderList(items2, 'list2')}
        </div>
      </div>
    </div>
  )
}

export default DragNDrop
