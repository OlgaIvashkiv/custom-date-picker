import React from "react";
import PropTypes from 'prop-types';

const Day = ({ day, className }) => {
    return (
            <div className={ className }>
                { day.format("D").toString() } 
            </div>
    )

};

Day.propTypes = {
    day: PropTypes.object.isRequired,
    className: PropTypes.string
}

export default Day;