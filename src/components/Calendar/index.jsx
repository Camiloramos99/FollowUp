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

    const { setSelectedDate , calendarData } = useContext(AppContext);

    const startDate = new Date('2023-12-31');
    const endDate = new Date('2024-12-31');

    const allDates = generateDateRange(startDate, endDate).map((date) => {
        const found = calendarData.find(d => d.date === date);
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
        <div className="flex items-center">
            <div className="w-10/12 border-2 border-gray-100 rounded-t-lg shadow-lg p-4">
                <CalendarHeatmap
                    startDate={startDate}
                    endDate={endDate}
                    values={allDates} 
                    horizontal={true}
                    showWeekdayLabels={true}
                    weekLabels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
                    titleForValue={(value) => value ? `${value.date}${value.description ? `\n${value.description}` : ''}` : 'No data'}
                    classForValue={(value) => value && value.count > 0 ? `color-scale-${value.count}` : 'color-empty'}
                    onClick={handleDayClick}
                />
            </div>
        </div>
    );
}

export { Calendar };
