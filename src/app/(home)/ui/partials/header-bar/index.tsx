import Link from "next/link";

export default function HeaderBar() {
  return (
    <div className="bg-graybg sticky top-0 z-40 flex w-full items-center justify-between px-[7%] py-6">
      <Link href={"/"} className="text-3xl font-bold">
        Event <span className="text-pry">Hive</span>
      </Link>

      <div className="flex items-center gap-4 text-sm">
        <Link href={"/signin"}>Login</Link>
        <Link
          href={"/signup"}
          className="bg-pry rounded-lg px-6 py-2 text-[#fff]"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}
