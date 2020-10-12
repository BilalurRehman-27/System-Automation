export const payload = {
    ascending: 0,
    where: {},
    limit: 10,
    orderBy: '',
    page: 1,
    rowPerPage: 10,
    querySearch: '',
    sideFilters: {},
};

export function compareDates(date: Date | null, selectedDate: Date) {
    const date1 = date?.setHours(0, 0, 0, 0);
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const date2 = new Date(selectedDate).setHours(0, 0, 0, 0);
    if (date1 !== currentDate) {
        return date;
    }
    if (date1 !== date2) {
        return selectedDate;
    } else return date;
}
