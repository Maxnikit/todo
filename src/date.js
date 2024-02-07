import { formatDistance, subDays } from "date-fns";

export default class Date {
  static format(date) {
    return formatDistance(subDays(new Date(), date), new Date(), {
      addSuffix: true,
    });
  }
}
