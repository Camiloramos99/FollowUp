import React from 'react';
import { Calendar } from '../../components/Calendar/index.jsx';
import { HabitForm } from '../../components/HabitForm/index.jsx';

const Habits = () => {

    return (
        <>
            <div className="flex h-screen">
                <div className="w-1/4 h-full bg-gray-900 p-4">
                    <HabitForm />
                </div>              
                <div className="flex-1 flex flex-col p-4">
                    <h1 className="text-4xl font-bold text-gray-900 tracking-wide mb-12 pb-2 relative">
                        Habit Tracker
                        <span className="absolute left-1/2 bottom-0 w-1/3 h-1 bg-gradient-to-r from-neutral-50 to-green-600 rounded-sm transform -translate-x-1/2"></span>
                    </h1>
                    <div className="flex-1">
                        <Calendar />
                    </div>
                </div>
            </div>
        </>
    );
}

export { Habits };
