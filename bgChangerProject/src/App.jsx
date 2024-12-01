import { useState } from 'react'



function App() {
  const [color, setColor] = useState("black");

  // const changeColor = (color) => {
  //   setColor(color);
  // };

  return (
    <>
    <div className="w-screen h-screen bg-black" style={{ backgroundColor: color }}>
    <div className='flex fixed bottom-10 justify-center gap-x-5 items-center ml-96 bg-gradient-to-r from-orange-200 to-orange-700 text-white border-8 border-white rounded-xl p-4'>
  {/* Your content goes here */}


        <button className='text-white border-1 bg-black border-white rounded-xl p-4 font-extrabold' onClick={() => setColor("Red")}>Red</button>
        <button
        className='text-white border-1 bg-black border-white rounded-xl p-4 font-extrabold'
        onClick={() => setColor("Green")}>Green</button>
        <button
        className='text-white border-1 bg-black border-white rounded-xl p-4 font-extrabold'
        onClick={() =>setColor("Blue")}>Blue</button>
        <button 
        className='text-white border-1 bg-black border-white rounded-xl p-4 font-extrabold'
        onClick={() => setColor("Gray")}>Gray</button>
        <button 
        className='text-white border-1 bg-black border-white rounded-xl p-4 font-extrabold'
        onClick={() => setColor("Pink")}>Pink</button>
        <button 
        className='text-white border-1 bg-black border-white rounded-xl p-4 font-extrabold'
        onClick={() => setColor("Black")}>Black</button>
        <button 
        className='text-white border-1 bg-black border-white rounded-xl p-4 font-extrabold'
        onClick={() => setColor("Orange")}>Orange</button>
        <button 
        className='text-white border-1 bg-black border-white rounded-xl p-4 font-extrabold'
        onClick={() => setColor("Yellow")}>Yellow</button>
        <button 
        className='text-white border-1 bg-black border-white rounded-xl p-4 font-extrabold'
        onClick={() => setColor("Violet")}>Violet</button>
        <button 
        className='text-white border-1 bg-black border-white rounded-xl p-4 font-extrabold'
        onClick={() => setColor("Purple")}>Purple</button>
        <button 
        className='text-white border-1 bg-black border-white rounded-xl p-4 font-extrabold'
        onClick={() => setColor("Olive")}>Olive</button>
      </div>

      </div>
    </>
  );
}

export default App;


