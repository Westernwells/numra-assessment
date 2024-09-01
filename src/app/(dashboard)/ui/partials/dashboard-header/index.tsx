import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function DashboardHeader() {
  return (
    <div className="flex h-[50px] w-full items-center justify-end bg-white px-[5%]">
      <div>
        <Link
          href={"/"}
          className="font-semibold text-pry sm:hidden md:text-2xl"
        >
          <IoHome className="h-[32px] w-[32px]" />
        </Link>
      </div>
    </div>
  );
}
