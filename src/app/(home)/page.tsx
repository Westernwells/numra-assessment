import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import PrimaryCard from "../ui/components/cards/primary-card";
import MakeYourEvent from "./ui/partials/make-your-event";
import PrimaryButton from "../ui/components/buttons/primary-button";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="min-h-screenn flex flex-col bg-blue-300 text-white">
        <div
          className="sticky top-0 flex h-full max-h-[600px] min-h-[50vh] w-[100%] flex-col items-center rounded-[10px] bg-cover bg-center pt-[10%] lg:h-[60vh] lg:pt-[8%] xl:h-[70vh]"
          style={{
            backgroundImage: "url('/heroImage.png')",
          }}
        >
          <h2 className="text-center text-3xl font-semibold md:text-5xl lg:text-6xl">
            MADE FOR THOSE <br /> WHO DO
          </h2>
        </div>
        <div className="bg-graybg sticky top-0 z-10 mb-20 mt-6 pt-4">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-black md:text-3xl lg:text-4xl">
              Upcoming <span className="text-pry">Events</span>
            </h3>
            <div className="text-black">The filter</div>
          </div>
          <div className="mb-14">
            <ul className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 md:flex-row lg:grid-cols-3">
              <li>
                <PrimaryCard />
              </li>
              <li>
                <PrimaryCard />
              </li>
              <li>
                <PrimaryCard />
              </li>
              <li>
                <PrimaryCard />
              </li>
            </ul>
            <div className="mx-auto mt-10 w-full max-w-[150px]">
              <PrimaryButton label="Load more..." className="" />
            </div>
          </div>
          <div>
            <MakeYourEvent />
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
