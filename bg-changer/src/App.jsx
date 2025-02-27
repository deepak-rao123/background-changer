import { useState } from "react"

function App() {
  const [color,setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setColor("red")}
           className="outline-none px-4 py-1 rounded-3xl text-black shadow- "
          style={{backgroundColor: "red"}}>
            Red
            </button>
          
          <button 
          onClick={()=>setColor("violet")}
           className="outline-none px-4 py-1 rounded-3xl text-black shadow- "
          style={{backgroundColor: "violet"}}>
            Violet
            </button>
          <button 
          onClick={()=>setColor("black")}
          className="outline-none px-4 py-1 rounded-3xl text-white shadow- "
          style={{backgroundColor: "black"}}>
            Black
            </button>
          <button
          onClick={()=>setColor("brown")}
           className="outline-none  px-4 py-1 rounded-3xl text-black  shadow- "
          style={{backgroundColor: "brown"}}>
            Brown
            </button>
          <button 
          onClick={()=>setColor("orange")}
          className="outline-none px-4 py-1 rounded-3xl text-black shadow- "
          style={{backgroundColor: "orange"}}>
            Orange
            </button>
          <button onClick={()=>setColor("blue")}
          className="outline-none px-4 py-1 rounded-3xl text-black shadow- "
          style={{backgroundColor: "blue"}}>
            Blue
            </button>
          <button onClick={()=>setColor("yellow")}
          className="outline-none px-4 py-1 rounded-3xl text-black shadow- "
          style={{backgroundColor: "yellow"}}>
            Yellow
            </button>
          <button onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-3xl text-black shadow- "
          style={{backgroundColor: "green"}}>
            Green
            </button>
          <button onClick={()=>setColor("gray")}
          className="outline-none px-4 py-1 rounded-3xl text-black shadow- "
          style={{backgroundColor: "gray"}}>
            Gray
            </button>
            <button className="outline-none px-4 py-1 rounded-3xl text-black shadow- "
          style={{backgroundColor: "pink"}}>
            Pink
            </button>
          <button onClick={()=>setColor("olive")}
          className="outline-none px-4 py-1 rounded-3xl text-black shadow- "
          style={{backgroundColor: "olive"}}>
            Olive
            </button>
            </div>
      </div>
    </div>
  )
}

export default App
