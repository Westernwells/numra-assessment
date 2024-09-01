import { currentUser } from "~/app/data";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl">
        Welcome back <span className="font-bold">{currentUser.name}</span>
      </h1>
      <h2>Your profile are all here</h2>
    </div>
  );
}
