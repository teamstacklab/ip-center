import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from 'date-fns/format'
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import ptBR from "date-fns/locale/pt-BR";
import 'react-big-calendar/lib/css/react-big-calendar.css';

import './CSS/mobile.css';
import './CSS/desktop.css';
import api from "../../api";
import { ApiEventos } from "../../api/routes";

const locales = {
  'pt-BR': ptBR
};

const cultures = ['pt-BR']
const eventModel = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
  },
]
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export const CalendarAgenda = ( props ) => {
  const [eventos, setEventos] = React.useState([]);

  React.useEffect(() => {
    api.get(ApiEventos.all).then((res) => {
      setEventos(res.data);
    })
  },[])

  if (!eventos) return null;

  const formatedEventos = eventos.map(evento=>{
    return {
      id: evento.id,
      title: evento.name,
      start: new Date(evento.initialDate),
      end: new Date(evento.finalDate)
    }
  })

  console.log(formatedEventos)
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
        events={formatedEventos}
        {...props}
      />
    </div>
  );
}

export default CalendarAgenda;