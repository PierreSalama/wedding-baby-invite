import { FrontCover } from "./components/FrontCover";
import { EventDetails } from "./components/EventDetails";
import { Rsvp } from "./components/Rsvp";
import { ThankYou } from "./components/ThankYou";

export default function App() {
  return (
    <main className="bg-ivory text-ink">
      <FrontCover />
      <EventDetails />
      <Rsvp />
      <ThankYou />
    </main>
  );
}
