const result = document.querySelector('.result');

function getDate() {
  let dayOfWeekText = '';
  const date = new Date();
  const dayOfMonth = puttingZeroToLeft(date.getDate());
  const hours = puttingZeroToLeft(date.getHours());
  const minutes = puttingZeroToLeft(date.getMinutes());
  const dayOfWeek = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (result.innerHTML = `${getDayOfWeekText(
    dayOfWeek
  )}, ${getMonthOfYearText(
    month
  )} ${dayOfMonth}th, ${year} ${hours}:${minutes}`);
}

function getDayOfWeekText(day) {
  switch (day) {
    case 0:
      return (dayOfWeekText = 'Sunday');
    case 1:
      return (dayOfWeekText = 'Monday');
    case 2:
      return (dayOfWeekText = 'Tuesdays');
    case 3:
      return (dayOfWeekText = 'Wednesday');
    case 4:
      return (dayOfWeekText = 'Thusday');
    case 5:
      return (dayOfWeekText = 'Friday');
    case 6:
      return (dayOfWeekText = 'Saturday');
    default:
      console.log('Something is wrong days of the week!');
  }
}

function getMonthOfYearText(month) {
  switch (month) {
    case 0:
      return (dayOfWeekText = 'January');
    case 1:
      return (dayOfWeekText = 'February');
    case 2:
      return (dayOfWeekText = 'March');
    case 3:
      return (dayOfWeekText = 'April');
    case 4:
      return (dayOfWeekText = 'May');
    case 5:
      return (dayOfWeekText = 'June');
    case 6:
      return (dayOfWeekText = 'July');
    case 7:
      return (dayOfWeekText = 'August');
    case 8:
      return (dayOfWeekText = 'September');
    case 9:
      return (dayOfWeekText = 'October');
    case 10:
      return (dayOfWeekText = 'November');
    case 11:
      return (dayOfWeekText = 'December');
    default:
      console.log('Something is wrong with months!');
  }
}

function puttingZeroToLeft(number) {
  return number >= 10 ? number : `0${number}`;
}

result.innerHTML = `${getDate()}`;
