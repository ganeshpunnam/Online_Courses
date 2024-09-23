"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [count, setCount] = useState<number>(0);
  const route = useRouter();
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex justify-center items-center h-screen bg-red-500">
      <button onClick={()=>route.back()}>Back</button>
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
        <div className="flex flex-col space-y-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={decrement}
          >
            Decrement
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
