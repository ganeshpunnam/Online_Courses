"use client";
import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import Header from '../Header/page';

const Page: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>(''); 
    const [data, setData] = useState<boolean>(false);

    const handleTask = (event: React.FormEvent) => {
        event.preventDefault();
        setData(true);
        console.log("Data Submitted:", inputValue);
    };

    const handleDownload = () => {
        const certificateElement = document.getElementById('certificate');
        if (certificateElement) {
            html2canvas(certificateElement, {
                backgroundColor: null, 
                useCORS: true 
            }).then(canvas => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'certificate.png';
                link.click();
            });
        }
    };

    return (
        <div className="flex flex-col items-center p-4 sm:p-8">
            <Header />
            <h1 className="text-3xl sm:text-5xl text-red-700 font-bold mt-6 mb-6 text-center">GENERATE CERTIFICATE</h1>
            <form onSubmit={handleTask} className="mb-6 flex flex-col sm:flex-row items-center">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter name"
                    className="border-2 border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 w-full sm:w-auto"
                />
                <button
                    type="submit"
                    className="mt-4 sm:mt-0 sm:ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
            {data && (
                <div className="w-full ">
                    <div
                        id="certificate"
                        className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGb0PWPQlSv3vQ89abcfdXk2tSjRjmXzTMJM6Q9K6wCMPCxLnsUzB6gmXwxxhWZaTrFWg&usqp=CAU')]
                         bg-cover bg-center bg-no-repeat bg-yellow-300 w-full sm:w-3/4 lg:w-2/3 h-[400px] sm:h-[600px] mx-auto rounded-lg shadow-lg"
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-80 p-4 sm:p-10 rounded-lg shadow-2xl">
                            <h1 className="text-3xl sm:text-6xl font-bold mt-6 mb-6 text-center">CERTIFICATE</h1>
                            <h4 className="text-xl sm:text-3xl font-semibold mb-4 text-center">OF ACHIEVEMENT</h4>
                            <p className="text-md sm:text-xl mb-6 text-center">THIS CERTIFICATE IS PROUDLY PRESENTED TO</p>
                            <h2 className="text-2xl sm:text-5xl font-extrabold mb-8 text-center">{inputValue}</h2>
                            <p className="text-sm sm:text-xl text-center">For your outstanding performance</p>
                            <p className="text-sm sm:text-lg text-gray-600 mt-4 text-center">Issued on: {new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleDownload}
                        className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 text-base sm:text-lg"
                    >
                        DOWNLOAD CERTIFICATE
                    </button>
                </div>
            )}
        </div>
    );
};

export default Page;
