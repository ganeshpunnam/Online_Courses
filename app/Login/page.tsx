"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>(''); // Email state
  const [password, setPassword] = useState<string>(''); // Password state

  // Handle login function
  const handleLogin = () => {
    if (email === "ganesh" && password === "ganesh") {
      router.push('/Course'); // Navigate to Counter on success
    } else {
      alert("Incorrect login details");
    }
  };

  return (
    <>
      <div className='flex flex-col w-64 bg-yellow-500 p-6 gap-6 font-bold'>
        <h1>Login</h1>
        <input
          type='email'
          placeholder='Enter the Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Enter the Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='p-2 bg-red-300 rounded-xl' onClick={handleLogin}>
          Submit
        </button>
      </div>

      
    </>
  );
};

export default LoginPage;
