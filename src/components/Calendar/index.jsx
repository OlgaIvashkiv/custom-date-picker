import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import buildCalendar from './helpers/buildCalendar';
import dayStyles from './helpers/stylesBuilder';
import moment from 'moment';
import CalendarHeader from '../CalendarHeader';
import WeeksName from '../WeeksName';
import Day from '../Day';
import { DateLabel, StyledCalendar, StyledDayNames } from './styles'


const Calendar = ({ date, onSelectedDateChange, weeks }) => {
    const [calendar, setCalendar] = useState([]);

    useEffect(() => {
        setCalendar(buildCalendar(date));
    }, [date]);


    return (
        <StyledCalendar>
        <div className="calendar">
            <DateLabel>
                { date.format("LL") }
            </DateLabel>
            <CalendarHeader date={ date } onSelectedDateChange={ onSelectedDateChange } />
            <div className="body">
                    <StyledDayNames>
                        { weeks.map(weekDay => <WeeksName key={ weekDay } weekDay={ weekDay } />)}
                    </StyledDayNames>
                {
                    calendar.map((week, index) => (
                        <div key={ index }>
                            { week.map(day => (
                                <div
                                    key={ day }
                                    className="day"
                                    onClick={() => {
                                        if (day < moment(new Date()).startOf("day")) return;
                                        onSelectedDateChange(day);
                                    }}
                                >
                                    <Day className={dayStyles(day, date)} day={ day } />
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
        </StyledCalendar>
    );
};

Calendar.propTypes = {
    date: PropTypes.PropTypes.object.isRequired,
    onSelectedDateChange: PropTypes.func.isRequired,
    weeks: PropTypes.array.isRequired
};

export default Calendar;