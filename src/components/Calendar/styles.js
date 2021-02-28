import styled from 'styled-components';

export const DateLabel = styled.div`
display: flex;
justify-content: center;
text-align: center;
min-height: 2rem;
margin-top: 1rem;
padding-top: 10px;
`;

export const StyledCalendar = styled.div`
    .calendar {
  box-sizing: border-box;
  font-size: 1rem;
  max-width: 400px;
}

.calendar .day-names {
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
}

.calendar .body {
  border: 1px solid ${(props) => props.theme.colors.blue};
}

.calendar .week {
  background-color: ${(props) => props.theme.colors.white};
  width: calc(100% / 7);
  height: 44px;
  line-height: 44px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.black};;
  font-weight: 400;
}

.calendar .day {
  position: relative;
  width: calc(100% / 7);
  height: 44px;
  display: inline-block;
  background-color: white;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-align: center;
}

.calendar .day div {
  width: 54px;
  height: 44px;
  position: relative;
  color: ${(props) => props.theme.colors.black};;
  line-height: 44px;
}

.calendar .day div.before {
  color: ${(props) => props.theme.colors.blue};;
}

.calendar .day div.selected {
  background-color: ${(props) => props.theme.colors.green};;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
}

.calendar .day div.today {
  background-color: ${(props) => props.theme.colors.blue};
}

`
export const StyledDayNames = styled.div`
display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
// `