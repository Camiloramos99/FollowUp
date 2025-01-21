import React, { useContext, useEffect } from 'react';
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

    const { setSelectedDate , calendarData, setIsChecked, setCurrentDescription, selectedYear, setSelectedYear } = useContext(AppContext);

    const startDate = new Date('2024-12-31');
    const endDate = new Date('2025-12-31');

    const allDates = generateDateRange(startDate, endDate).map((date) => {
        const found = calendarData.find(d => d.date === date);
        return found ? found : { date, count: 0 };
    });

    const handleDayClick = (value) => {
        if (value?.count === 3) {
            setSelectedDate(value.date);
            setIsChecked(true);
            setCurrentDescription(value.description);
        } else if (value) {
            setSelectedDate(value.date);
            setIsChecked(false);
            setCurrentDescription('');
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
                    weekLabels={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                    titleForValue={(value) => value ? `${value.date}${value.description ? `\n${value.description}` : ''}` : 'No data'}
                    classForValue={(value) => value && value.count > 0 ? `color-scale-${value.count}` : 'color-empty'}
                    onClick={handleDayClick}
                />
            </div>
            <div>
                <label htmlFor="year-selected">Select the year</label>
                <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value) }>
                { Array.from({ length: 1 }, (_, index) => {
                    const year = new Date().getFullYear() - index;
                    return (
                    <option className="p-2 border border-gray-300 rounded"
                        key={year} 
                        value={year} 
                        >
                        {year}
                    </option>
                    );
                })}
                </select>
            </div>
        </div>
    );
}

export { Calendar };
