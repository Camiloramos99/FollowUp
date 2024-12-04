import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Calendar } from '../../components/Calendar/Calendar';


const Habits = () => {


    return (
        <div className='flex items-center flex-col'>
            <h1>Habits</h1>
            <div className='w-9/12 border border-black rounded-md p-2' >
                <Calendar />
            </div>
        </div>

    )
}

export { Habits };