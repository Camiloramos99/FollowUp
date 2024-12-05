import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const Calendar = () => {
    const dummyData = [
        { date: '2024-01-01', count: 12 },
        { date: '2024-01-06', count: 12 },
        { date: '2024-12-31', count: 12 },
        { date: '2024-10-10', count: 12 },
        { date: '2024-07-30', count: 12 },
        { date: '2024-07-07', count: 12 },
    ];

    const handleDayClick = (value) => {
        console.log('Clicked value:', value); 
        if (value) {
            alert(`Clicked on date: ${value.date ? value.date : 'No date available'}`);
        } else {
            alert('No value passed');
        }
    };
    

    return (
        <div className='w-full flex items-center flex-col'>
            <h1 className="text-4xl font-bold text-gray-900 tracking-wide mb-6 relative">
                Habit Name
                <span className="absolute left-0 bottom-[-8px] w-full h-1 bg-gradient-to-r from-neutral-50 to-green-600 rounded-sm"></span>
            </h1>
            <div className='w-8/12 border-2 border-gray-100 rounded-t-lg shadow-lg p-4'>
                <CalendarHeatmap
                    startDate={new Date('2023-12-31')}
                    endDate={new Date('2024-12-31')}
                    values={dummyData}
                    horizontal={true}
                    showWeekdayLabels={true}
                    weekdayLabels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
                    onClick={handleDayClick} 
                />
            </div>
        </div>
    );
}

export { Calendar };
