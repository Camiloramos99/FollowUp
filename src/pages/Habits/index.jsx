import React from 'react';
import { Calendar } from '../../components/Calendar/index.jsx';
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
