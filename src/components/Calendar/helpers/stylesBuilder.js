const isSelected = (day, date) => {
    return date.isSame(day, "day");
}

export const beforeToday = (day) => {
    return day.isBefore(new Date(), "day");
}

const isToday = (day) => {
    return day.isSame(new Date(), "day");
}

const dayStyles = (day, date) => {
    if (beforeToday(day)) return "before";
    if (isSelected(day, date)) return "selected";
    if (isToday(day)) return "today";
    return "";
};



export default dayStyles;