import { FrontCover } from "./components/FrontCover";
import { EventDetails } from "./components/EventDetails";
import { Location } from "./components/Location";
import { Rsvp } from "./components/Rsvp";
import { ThankYou } from "./components/ThankYou";

export default function App() {
  return (
    <main className="bg-ivory text-ink">
      <FrontCover />
      <EventDetails />
      <Location />
      <Rsvp />
      <ThankYou />
    </main>
  );
}
