import React from 'react';
import { Calendar } from '../../components/Calendar/index.jsx';
import { CalendarTitle } from '../../components/CalendarTitle/index.jsx';
import { HabitForm } from '../../components/HabitForm/index.jsx';

const Habits = () => {

    return (
        <>
            <div className="w-full h-screen">  
                <div className="p-4 w-full h-5">
                    <h1 className="relative text-4xl font-bold text-gray-900 tracking-wide mb-12 pb-2">
                        Habit Tracker
                        <span className="absolute left-1/2 bottom-0 w-1/3 h-1 bg-gradient-to-r from-neutral-50 to-green-600 rounded-sm transform -translate-x-1/2"></span>
                    </h1>

                    <div className="flex border bg-gray-900 border-black rounded-lg max-h-82 w-full items-center ">
                        <div className="h-full p-4">
                            <HabitForm />
                        </div>     
                        <div className='w-full' >
                            <CalendarTitle />
                            <Calendar/>
                        </div>

                    </div>
                    </div>

            </div>
        </>
    );
}

export { Habits };
