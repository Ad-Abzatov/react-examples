import { useState } from "react"

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState<number[]>([]);

  return (
    <div>
      Хуки
      <p>useState</p>
      {count}
      <button onClick={() => setCount(Math.round(Math.random()*100))}>Рандом</button>
      <br/>
      {array.join(', ')}
      <button onClick={() => setArray(item => [...item, Math.round(Math.random()*100)])}>Добавить массив</button>
    </div>
  )
}

export default Hooks
