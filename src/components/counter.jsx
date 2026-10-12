import { useState } from "react"

const counter = () => {
    const [count, setCount] = useState(0);
// increment count
const handleIncrement = () => {
    setCount(count + 1)
}
//decrement handler
const handledecrement = () =>{
    if(count >0){
    setCount(count - 1)
    }
}
//reset handle
const handleReset = () => {
    setCount(0)
}

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <h1 className="text-2xl font-bold mb-4 text-gray-800">My counter app</h1>
    <p className="text-xl text-gray-600 mb-6">Count: {count}</p>
            <div className="flex space-x-4">
                {/* increment button  */}
                <button onClick={handleIncrement} className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">Increase (+)</button>
                {/* decrement button */}
                <button onClick={handledecrement} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">Decrease (-)</button>
                {/* reset button */}
                <button onClick={handleReset} className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition">Reset</button>
            </div>
        </div>
    </div>
  )
}

export default counter