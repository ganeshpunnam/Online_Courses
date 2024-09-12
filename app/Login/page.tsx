"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CoursePage from '../Course/page'; // Import child component

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>(''); // Email state
  const [password, setPassword] = useState<string>(''); // Password state
  const [state, setState] = useState<boolean>(false); // Boolean state for login

  // Handle login function
  const handleLogin = () => {
    if (email === "ganesh" && password === "ganesh") {
      router.push('/Counter'); // Navigate to Counter on success
      setState(true); // Set state to true on successful login
    } else {
      alert("Incorrect login details");
      setState(false); // Set state to false on login failure
    }
  };
  console.log(state)

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
