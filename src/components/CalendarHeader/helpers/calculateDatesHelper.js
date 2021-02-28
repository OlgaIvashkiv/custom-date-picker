export const currMonthName = (date) => {
    return date.format("MMMM");
}

export const currYear = (date) => {
    return date.format("YYYY");
}

export const prevMonth = (date) => {
    return date.clone().subtract(1, "month");
}

export const nextMonth = (date) => {
    return date.clone().add(1, "month");
}

export const thisMonth = (date) => {
    return date.isSame(new Date(), "month");
}