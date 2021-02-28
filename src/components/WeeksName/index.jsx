import React from "react";
import PropTypes from 'prop-types';
import { StyledWeeksName } from './styles';

const WeeksName = ({ weekDay }) => {
    return (
        <StyledWeeksName>{ weekDay }</StyledWeeksName>
    )

};

WeeksName.propTypes = {
    weekDay: PropTypes.string.isRequired
}

export default WeeksName;