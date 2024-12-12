import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from "../../contexts/AppContext.jsx";

const HabitForm = () => {
    const { selectedDate } = useContext(AppContext);
    const [date, setDate ] = useState("");

    useEffect(() => {
      setDate(selectedDate || ""); 
    },[selectedDate]);

    
    const handleDateChange = (e) => { 
      setDate(e.target.value); 
    };
    
    return (
      <div className="bg-gray-900 rounded-lg shadow-md p-6 max-w-sm mx-auto">
        
        <div className="relative">
            <input 
                type="date" 
                className="bg-gray-900 text-gray-100 text-lg font-semibold mb-4 w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                style={{ colorScheme: 'dark' }} 
                value={date}
                onChange={handleDateChange}
            />
        </div>

        <div className="flex items-center mb-4">
          <input 
            type="checkbox" 
            id="completed" 
            className="h-4 w-4 text-indigo-400 focus:ring-indigo-500 border-gray-600 rounded" 
          />
          <label 
            htmlFor="completed" 
            className="ml-2 block text-sm font-medium text-gray-200">
            Marcar como completado
          </label>
        </div>
  
        <div className="mb-4">
          <label 
            htmlFor="description" 
            className="block text-sm font-medium text-gray-200">
            Descripción (opcional)
          </label>
          <textarea 
            id="description" 
            rows="3" 
            className="mt-1 p-2 block w-full shadow-sm border border-gray-600 bg-gray-800 text-gray-100 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            placeholder="E.g. Series de ejercicio: 3x15"
          />
        </div>
  
        <div className="flex justify-end">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
            Guardar
          </button>
        </div>
      </div>
    );
  };
    
  
  export { HabitForm };
  