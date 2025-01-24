import React, { useContext, useState, useEffect, useRef } from 'react'
import { AppContext } from "../../contexts/AppContext.jsx";

const HabitForm = () => {
    const { selectedDate, saveHabit, isChecked, setIsChecked, setCurrentDescription, currentDescription } = useContext(AppContext);
    const [date, setDate ] = useState("");
    const checkboxRef = useRef(null);
    const dateInputRef = useRef(null);

    useEffect(() => {
      setDate(selectedDate || ""); 
    },[selectedDate]);


    const handleDateChange = (e) => { 
      setDate(e.target.value); 
    };

    const handleHabitSave = () => {
      const dateInHabitForm = dateInputRef.current.value;
      const isChecked = checkboxRef.current.checked;  

      saveHabit(dateInHabitForm, isChecked);
  };  

    return (
      <div className="rounded-lg bg-white border border-gray-700 shadow-2xl p-6 m-2 mx-auto">
        
        <div >
            <input 
                type="date" 
                className=" text-[#66666679] text-lg font-semibold mb-4 w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                style={{ colorScheme: 'normal' }} 
                value={date}
                onChange={handleDateChange}
                ref={dateInputRef}
            />
        </div>

        <div className="flex items-center mb-4">
          <input 
            type="checkbox" 
            id="completed" 
            ref={checkboxRef}
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="h-4 w-4 text-indigo-400 focus:ring-indigo-500 border-gray-600 rounded" 
          />
          <label 
            htmlFor="completed" 
            className="ml-2 block text-sm font-medium text-[#66666679]">
            {isChecked ? 'Unmark as completed' : 'Mark as completed'}
          </label>
        </div>
  
        <div className="mb-4">
          <label 
            htmlFor="description" 
            className="block text-sm font-medium text-[#66666679] ">
            Description (optional)
          </label>
          <textarea 
            id="description" 
            rows="3" 
            className="mt-1 p-2 block w-full shadow-sm bg-white text-[#66666679] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm" 
            placeholder="E.g. Exercise sets: 3x15"
            value={currentDescription} 
            onChange={(e) => setCurrentDescription(e.target.value)}
            
          />
        </div>
  
        <div className="flex justify-end">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            onClick={handleHabitSave} >
            Save
          </button>
        </div>
      </div>
    );
  };
    
  
  export { HabitForm };
  