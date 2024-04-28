export const filterWeekend = () => {
  const markedDates = {};
  const today = new Date();
  const year = today.getFullYear();

  for (let month = 0; month < 12; month++) {
    const numberOfDays = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= numberOfDays; day++) {
      const date = `${year}-${(month + 1).toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`;
      const dayOfWeek = new Date(date).getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        // Sunday (0) and Saturday (6)
        markedDates[date] = {
          selected: false,
          disableTouchEvent: true,
          disabled: true,
          marked: true,
        };
      }
    }
  }

  return markedDates;
};
