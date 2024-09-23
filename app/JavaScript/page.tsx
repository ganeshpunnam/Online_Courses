"use client";
import { useState } from 'react';

interface AccordionItem {
  title: string;
  content: string;
  videos: string[];  // Array of video URLs
}

const accordionData: AccordionItem[] = [
  {
    title: "JavaScript Internals",
    content: "Event Loop, Execution Context and V8 JS Engine",
    videos: [
      "https://www.youtube.com/embed/8aGhZQkoFbQ",
      "https://www.youtube.com/embed/cCOL7MC4Pl0",
      "https://www.youtube.com/embed/y3KbgxW3Kmk",
      "https://www.youtube.com/embed/5pQsl9PYwD8",
      "https://www.youtube.com/embed/XfUW9s5Ybsw",
      "https://www.youtube.com/embed/Zxmb1nUUbP4",
      "https://www.youtube.com/embed/BVnK25xasV0",
      "https://www.youtube.com/embed/8GWW8UwddqA",
    ],
  },
  {
    title: "Hoisting",
    content: "Variable & Function Hoisting Concepts",
    videos: [
      "https://www.youtube.com/embed/Fnlnw8uY6jo",
      "https://www.youtube.com/embed/XO2WtbEA2SM",
      "https://www.youtube.com/embed/ZD5jYPwWXgQ",
      "https://www.youtube.com/embed/vwUjNGCjSm0",
      "https://www.youtube.com/embed/SapxBhD-sSs",
      "https://www.youtube.com/embed/VNj4_LpB_mE",
      "https://www.youtube.com/embed/t3lZnx97uM4",
      "https://www.youtube.com/embed/vaGbnvUgGYg",
    ],
  },
  {
    title: "Closures",
    content: "Closure and Applications",
    videos: [
      "https://www.youtube.com/embed/1JsJx1x35c0",
      "https://www.youtube.com/embed/tkk2c1tnEwo",
      "https://www.youtube.com/embed/fLDTSmYX7TQ",
      "https://www.youtube.com/embed/zRZNxI9_GGc",
      "https://www.youtube.com/embed/RbI89STUwqQ",
      "https://www.youtube.com/embed/aKpqwDmpkgo",
      "https://www.youtube.com/embed/_lKskChCn8A",
      "https://www.youtube.com/embed/qtsbZarF3kk",
    ],
  },
];

const Page: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='bg-black text-white flex flex-col gap-4'>
     
      {/* <nav aria-label="Breadcrumb">
        <ol className="flex space-x-2">
          <li>
            <Link href="/Course" className="text-blue-500 hover:text-blue-700 ml-5">
              Home
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li>
            <Link href="/Course" className="text-blue-500 hover:text-blue-700">
              Course
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li>
            <Link href="/JavaScript" className="text-blue-500 hover:text-blue-700">
              Products
            </Link>
          </li>
          <li className="mx-2">/</li>
        </ol>
      </nav> */}
      <div className='p-6 flex flex-col gap-6'>
        <h1 className='text-3xl font-bold'>JavaScript Technologies</h1>

        {/* Accordion Section */}
        <div>
          {accordionData.map((item, index) => (
            <div key={index} className='bg-gray-800 mb-2'>
              <div
                onClick={() => toggleAccordion(index)}
                className='cursor-pointer py-1 px-3 bg-gray-700'
              >
                <h3 className='text-lg text-blue-400'>{item.title}</h3>
                <p className='text-sm'>{item.content}</p>
              </div>
              {activeIndex === index && (
                <div className='p-3 bg-gray-600'>
                  {/* Map through videos */}
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {item.videos.map((videoUrl, videoIndex) => (
                      <iframe
                        key={videoIndex}
                        width="100%"
                        height="250"
                        src={videoUrl}
                        title={`${item.title} Video ${videoIndex + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
