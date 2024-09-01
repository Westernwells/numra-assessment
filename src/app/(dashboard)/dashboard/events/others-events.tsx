import SecondaryCard from "~/app/ui/components/cards/secondary-card";
import { eventsDb } from "~/app/data";

export default function OthersEvents() {
  return (
    <div className="bg-gree-400 relative flex-1">
      <h1 className="mb-5 text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
        Others Events
      </h1>
      <div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {eventsDb.others.map((item) => (
            <li key={item.id}>
              <SecondaryCard type="others" data={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
