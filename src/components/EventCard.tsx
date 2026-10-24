import { Link } from "react-router";
import type { CampusEvent } from "../data/events";
import Card from "./ui/Card";
import Tag from "./ui/Tag";

type EventCardProps = {
  event: CampusEvent;
};

function EventCard({ event }: EventCardProps) {
  return (
    <Card>
      <article>
        <h2>{event.title}</h2>
        <p>Date: {event.date}</p>
        <p>Place: {event.place}</p>
        <Tag>{event.seats} seats</Tag>
        <p>
          <Link to={`/events/${event.id}`}>Details</Link>
        </p>
      </article>
    </Card>
  );
}

export default EventCard;