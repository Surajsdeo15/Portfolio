import React, { useState } from 'react';
import TheoryNavBar from './TheoryNavBar';
import TheoryDetailsSideBar from './TheoryDetailsSideBar';
import TheoryNotes from './CLanguage'; // Updated import
import './sidebarScroll.css';

function TheoryAll() {
  // Correctly use the setter for selectedTheory
  const [selectedTheory, setSelectedTheory] = useState('C Language');
  console.log('Theory:', selectedTheory);

  // Find the data for the selected theory
  const dataOfTheory = TheoryNotes.find(note => note.theory === selectedTheory);
  console.log('Main Theory:', dataOfTheory);

  return (
    <>
      {/* Pass setSelectedTheory to TheoryNavBar */}
      <TheoryNavBar onTopicSelect={setSelectedTheory} />

      {/* Pass selectedTheory to TheoryDetailsSideBar */}
      <TheoryDetailsSideBar selectedTheory={selectedTheory} />

      {/* Ensure dataOfTheory is correctly rendered */}
      <div className='fixed md:left-44 md:top-12 w-full min-h-screen bg-gradient-to-r from-slate-200 via-gray-300 to-slate-200 pt-12'>
        <div className='text-center  w-full h-20 text-4xl font-bold text-orange-700 mt-2'>
          <h1 className='underline'>{selectedTheory}</h1>
        </div>

        <div className=' md:flex gap-1'>
          <div className='overflow-y-auto h-[calc(100vh-6rem)] p-4 pb-28 md:w-2/3  thin-scrollbar'>
            {dataOfTheory ? (
              <div className='w-full h-auto'>
                <ul>
                  {dataOfTheory.topics.map(topic => (
                    <li key={topic.topic} className='mb-2'>
                      <strong className='text-2xl font-mono text-green-600'>{topic.topic} :</strong>
                      <div className='relative text-lg'>
                        {topic.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No data available for this theory okay.</p>
            )}
          </div>

          <div className='w-1/4'>
            <div className=' relative left-12 rounded-xl top-12 md:w-1/2 border-2 h-96 shadow-xl shadow-cyan-700'>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TheoryAll;
