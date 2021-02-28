import React from "react";
import PropTypes from 'prop-types';
import { StyledHeader } from './styles';
import { currMonthName, currYear, thisMonth, prevMonth, nextMonth } from './helpers/calculateDatesHelper';

const CalendarHeader = ({ date, onSelectedDateChange }) => {

  return (
    <StyledHeader>
      <div className="header">
        <button
          className="previous"
          onClick={ () => !thisMonth(date) && onSelectedDateChange(prevMonth(date)) }
        >
          { !thisMonth(date) ? String.fromCharCode(60) : null }
        </button>
        <div className="current">
          { currMonthName(date) } { currYear(date) }
        </div>
        <button className="next" onClick={() => onSelectedDateChange(nextMonth(date)) }>
          { String.fromCharCode(62) }
        </button>
      </div>

    </StyledHeader>
   
  );
};

CalendarHeader.propTypes = {
  date: PropTypes.PropTypes.object.isRequired,
  onSelectedDateChange: PropTypes.func.isRequired,
};

export default CalendarHeader;