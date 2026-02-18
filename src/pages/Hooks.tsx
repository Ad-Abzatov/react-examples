import { useState } from "react"

const Hooks = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button>{count}</button>
    </div>
  )
}

export default Hooks
