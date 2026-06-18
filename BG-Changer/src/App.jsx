import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [colour, setcolour] = useState("#D4AF37");

  // function changecolour(colour) {
  //   setcolour(colour)
  // }

  return (
    <div
      className="w-full h-screen duration-200 bg-black"
      style={{ backgroundColor: colour }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 shadow-lg bg-gray-200 px-3 py-2 rounded-3xl w-4xl justify-around text-lg text-black font-semibold">
          <button
            // onClick={() => changecolour("#6CACE4")}
            onClick={() => setcolour("#6CACE4")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "#6CACE4" }}
          >
            Argentinian Blue
          </button>
          <button
            // onClick={() => changecolour("#E60026")}
            onClick={() => setcolour("#E60026")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "#E60026" }}
          >
            Spanish Red
          </button>
          <button
            // onClick={() => changecolour("#009C3B")}
            onClick={() => setcolour("#009C3B")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "#009C3B" }}
          >
            Brazilian Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
