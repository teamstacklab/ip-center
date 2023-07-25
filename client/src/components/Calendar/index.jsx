import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from 'date-fns/format'
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import ptBR from "date-fns/locale/pt-BR";
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'pt-BR': ptBR
};

const cultures = ['pt-BR']
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export const CalendarAgenda = ( props ) => {

  // --> Formata os eventos
  const formatEvents = (eventsList) => {
    const formatedList = [];
    eventsList.forEach(event => {
      formatedList.push({
        id: event.id,
        title: event.name,
        start: new Date(event.initialDate),
        end: new Date(event.finalDate),
      })
    });

    return formatedList;
  }


  return (
    <div>
      <Calendar
        culture={cultures}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        className="calendar"
        views={['month']}
        popup={true}
        {...props}
      />
    </div>
  );
}

export default CalendarAgenda;