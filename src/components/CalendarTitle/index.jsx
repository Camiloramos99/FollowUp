import React, { useContext, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { FaRegEdit } from "react-icons/fa";

const CalendarTitle = () => {
  const { calendarTitleText, setCalendarTitleText } = useContext(AppContext);
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(calendarTitleText);

  const handleEdit = () => {
    setCalendarTitleText(newTitle);
    setEditMode(false);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleEdit();
    }

  }


  

  return (
    <div className="flex items-center justify-between absolute top-[-6%]">
      {editMode ? (
        <div className="flex flex-row items-center">
          <input 
            type="text" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
            onKeyDown={handleKeyDown}
            className="w-64 text-xs font-semibold text-gray-900 bg-gray-50 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
          />
          <button 
            onClick={handleEdit} 
            className="ml-2 text-xs font-semibold text-green-400 bg-gray-900 px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 ease-in-out"
          >
            Save
          </button>
        </div>
      ) : (
        <h1 className="flex flex-row text-xs font-semibold text-gray-50 bg-gray-900 px-4 py-2 rounded-lg hover:bg-opacity-90 hover:text-green-400 transition duration-300 ease-in-out">
          {calendarTitleText}
          <FaRegEdit 
            className='self-center ml-2'
            onClick={() => setEditMode(true)}     
          />
        </h1>
      )}
    </div>
  );
};

export  { CalendarTitle };
