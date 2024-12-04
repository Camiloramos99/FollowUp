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

    return (
        <div>
            <CalendarHeatmap
                startDate={new Date('2023-12-31')}
                endDate={new Date('2024-12-31')}
                values={dummyData}
                horizontal={true}
                showWeekdayLabels={true}
                weekdayLabels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']} 

            />
        </div>

    )
}

export { Calendar };