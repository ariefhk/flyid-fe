import dayjs from 'dayjs';

export const convertToDate = (date) => {
    let year = dayjs(date).get('year');
    let month = dayjs(date).get('month');
    let day = dayjs(date).get('date');
    return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
};

export const convertToTime = (date) => {
    let hour = dayjs(date).get('hour');
    let minute = dayjs(date).get('minute');
    return `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`;
};
