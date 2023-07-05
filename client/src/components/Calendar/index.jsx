import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from 'date-fns/format'
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import ptBR from "date-fns/locale/pt-BR";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { EventsController } from "../../controllers/EventsController";
import './CSS/mobile.css';
import './CSS/desktop.css';



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
  // --> Puxa o Controller de Eventos
  const eventsController = new EventsController();

  // --> Cria os estados
  const [events, setEvents] = React.useState([]);

  // --> Seta todos os <Eventos>
  React.useEffect(() => {
    eventsController.getAll()
    .then((res) => setEvents(res.data))
    .catch((err) => console.log(err));
  },[]);

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
        events={formatEvents(events)}
        {...props}
      />
    </div>
  );
}

export default CalendarAgenda;