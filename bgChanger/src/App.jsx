import { useState } from "react"

function App() {
  
  const [color, setColor] = useState("Olive");


  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={() => {setColor("red")}} className="outline-none px-4 rounded-3xl text-white " style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => {setColor("blue")}} className="outline-none px-4 rounded-3xl text-white " style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => {setColor("violet")}} className="outline-none px-4 rounded-3xl text-white " style={{backgroundColor: "violet"}}>Violet</button>
          <button onClick={() => {setColor("green")}} className="outline-none px-4 rounded-3xl text-white " style={{backgroundColor: "Green"}}>Green</button>
          <button onClick={() => {setColor("indigo")}} className="outline-none px-4 rounded-3xl text-white  " style={{backgroundColor: "indigo"}}>Indigo</button>
          <button onClick={() => {setColor("yellow")}} className="outline-none px-4 rounded-3xl text-black " style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => {setColor("white")}} className="outline-none px-4 rounded-3xl text-black " style={{backgroundColor: "white"}}>White</button>
          <button onClick={() => {setColor("black")}} className="outline-none px-4 rounded-3xl text-white " style={{backgroundColor: "black"}}>Black</button>
          <button onClick={() => {setColor("lavender")}} className="outline-none px-4 rounded-3xl text-black " style={{backgroundColor: "lavender"}}>Lavender</button>
          <button onClick={() => {setColor("pink")}} className="outline-none px-4 rounded-3xl text-black " style={{backgroundColor: "pink"}}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
