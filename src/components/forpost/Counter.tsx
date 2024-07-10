import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className='my-6 lg:my-10'>
      <div className='text-2xl'>請點擊按鈕</div>
      <br />
      <div className='space-x-4'>
        <button
          type='button'
          className='border rounded-md px-2 py-3 bg-amber-700'
          onClick={() => setCount(count - 1)}
        >
          減少數量-
        </button>
        <span>Count: {count}</span>
        <button
          type='button'
          className='border rounded-md px-2 py-3 bg-green-700'
          onClick={() => setCount(count + 1)}
        >
          增加數量+
        </button>
      </div>
    </div>
  )
}

export default Counter
