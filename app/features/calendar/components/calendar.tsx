import React from 'react';
import {
  decrementDateByOneMonth,
  formatDateToMonthYear,
  incrementDateByOneMonth,
  isDateOutsideRange,
  isThisMonth,
} from '~/libs/date';
import CalendarDateButton from './calendar-date-button';
import CalendarNoteButton from './calendar-note-button';
import GoToTodayButton from './go-to-today-button';
import NextMonthButton from './next-month-button';
import PrevMonthButton from './prev-month-button';

export default function Calendar() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const formattedDate = formatDateToMonthYear(selectedDate);
  const isNotThisMonth = !isThisMonth(selectedDate);
  const isNextMonthOutOfRange = isDateOutsideRange(selectedDate, 1);
  const isPrevMonthOutOfRange = isDateOutsideRange(selectedDate, -1);

  const goToPrevMonth = () => {
    setSelectedDate(prevDate => decrementDateByOneMonth(prevDate));
  };

  const goToNextMonth = () => {
    setSelectedDate(prevDate => incrementDateByOneMonth(prevDate));
  };

  const goToToday = () => {
    setSelectedDate(new Date());
  };

  return (
    <div className="budget-header-item budget-header-calendar">
      <PrevMonthButton onClick={goToPrevMonth} disabled={isPrevMonthOutOfRange} />

      <div className="budget-header-calendar-date">
        <CalendarDateButton label={formattedDate} />
        <CalendarNoteButton />
      </div>

      <NextMonthButton onClick={goToNextMonth} disabled={isNextMonthOutOfRange} />

      {isNotThisMonth && <GoToTodayButton onClick={goToToday} />}
    </div>
  );
}
