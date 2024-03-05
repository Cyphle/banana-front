import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Menu } from './shared/menu/Menu.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu></Menu>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ viteLogo } className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={ reactLogo } className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">
        Vite + React
      </h1>
      <p className="text-3xl text-gray-600">
        Getting a new business off the ground is a lot of hard work.
        Here are five ideas you can use to find your first customers.
      </p>
      <div className="card">
        <button onClick={ () => setCount((count) => count + 1) }>
          count is { count }
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
