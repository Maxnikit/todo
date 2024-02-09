import { formatDistance, subDays } from "date-fns";

export default class DateCustom {
  static getTimeRemaining(date) {
    const currentDate = new Date();

    return formatDistance(currentDate, date);
  }
}
