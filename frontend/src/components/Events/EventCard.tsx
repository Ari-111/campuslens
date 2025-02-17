import { Link } from 'react-router-dom';
import { format } from 'date-fns';

interface EventCardProps {
  event: {
    id: number;
    title: string;
    description: string;
    date: string;
    created_by: {
      first_name: string;
      last_name: string;
    };
  };
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{format(new Date(event.date), 'MMM dd, yyyy')}</span>
          <span>By {event.created_by.first_name} {event.created_by.last_name}</span>
        </div>
        <Link
          to={`/events/${event.id}`}
          className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard; 