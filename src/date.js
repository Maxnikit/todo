import { formatDistance, subDays } from "date-fns";

export default class DateCustom {
  static getTimeRemaining(date) {
    console.log(date);
    const currentDate = new Date();
    console.log(currentDate);
    return formatDistance(currentDate, date);
  }
}
