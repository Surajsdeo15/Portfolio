import React from 'react';
import TheoryNotes from './CLanguage';
import './sidebarScroll.css'; // Adjust the path as necessary

function TheoryDetailsSideBar({ selectedTheory }) {
  // Find the note matching the selected theory
  const selectedTheoryNote = TheoryNotes.find(note => note.theory === selectedTheory);
  console.log('theory of side baar',selectedTheory);





  return (
    <div className='fixed hidden md:block top-12 z-10 w-44 min-h-screen border-2 rounded-lg shadow-xl shadow-cyan-700 bg-gradient-to-tl from-slate-200 via-gray-300 to-slate-200'>
      <div className='p-4'>
        <h2 className='text-xl font-bold'>{selectedTheory}</h2>

      
          <div className='overflow-y-auto h-[calc(100vh-6rem)] thin-scrollbar'>
            <ul>
              {selectedTheoryNote.topics.map(topic => (
                <li key={topic.topic} className='mb-2'> <span className='font-bold text-green-600'>=&gt;</span>  {topic.topic} </li>
              ))}
            </ul>

           
          </div>
       
      </div>
    </div>
  );
}

export default TheoryDetailsSideBar;
