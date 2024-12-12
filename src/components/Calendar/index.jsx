import React, { useContext } from 'react';
import './Styles.css';  
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { AppContext } from '../../contexts/AppContext.jsx';


const generateDateRange = (startDate, endDate) => {
    let dates = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        dates.push(currentDate.toISOString().split('T')[0]); 
        currentDate.setDate(currentDate.getDate() + 1); 
    }
    return dates;
};
const Calendar = () => {

    const { setSelectedDate } = useContext(AppContext);

    const dummyData = [
        { date: '2024-01-01', count: 1 },
        { date: '2024-01-06', count: 1 },
        { date: '2024-12-31', count: 1 },
        { date: '2024-10-10', count: 1 },
        { date: '2024-07-30', count: 3 },
        { date: '2024-07-07', count: 3 },
    ];

    const startDate = new Date('2023-12-31');
    const endDate = new Date('2024-12-31');

    const allDates = generateDateRange(startDate, endDate).map((date) => {
        const found = dummyData.find(d => d.date === date);
        return found ? found : { date, count: 0 };
    });

    const handleDayClick = (value) => {
        if (value) {
            setSelectedDate(value.date);
        } else {
            alert('No value passed');
        }
    };

    return (
        <div className="w-full flex items-center flex-col">
            <h1 className="text-4xl font-bold text-gray-900 tracking-wide mb-6 relative">
                Habit Name
                <span className="absolute left-0 bottom-[-8px] w-full h-1 bg-gradient-to-r from-neutral-50 to-green-600 rounded-sm"></span>
            </h1>
            <div className="w-8/12 border-2 border-gray-100 rounded-t-lg shadow-lg p-4">
                <CalendarHeatmap
                    startDate={startDate}
                    endDate={endDate}
                    values={allDates} 
                    horizontal={true}
                    showWeekdayLabels={true}
                    weekLabels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
                    titleForValue={(value) => value ? `Date: ${value.date}` : 'No data'}
                    classForValue={(value) => value && value.count > 0 ? `color-scale-${value.count}` : 'color-empty'}
                    onClick={handleDayClick}
                />
            </div>
        </div>
    );
}

export { Calendar };
