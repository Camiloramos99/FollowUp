import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Calendar } from '../../components/Calendar/Calendar';
import { HabitForm } from '../../components/HabitForm/index.jsx';

const Habits = () => {

    return (
        <>
            <Calendar />
            <HabitForm />
        </>
    );
}

export { Habits };
