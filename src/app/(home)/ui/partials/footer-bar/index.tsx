import Link from "next/link";
import PrimaryButton from "~/app/ui/components/buttons/primary-button";
import PrimaryIntput from "~/app/ui/components/inputs/primary-input";

export default function FooterBar() {
  return (
    <div className="pyy-6 flex flex-col items-center justify-between bg-sec px-[7%]">
      <div className="flex w-full flex-col items-center py-5">
        <Link href={"/"} className="text-3xl font-bold">
          Event <span className="text-pry">Hive</span>
        </Link>
        {/* <div className="flex items-center gap-2">
          <PrimaryIntput />
          <div className="w-[80px] md:w-[100px] lg:w-[150px]">
            <PrimaryButton label={"Subscribe"} />
          </div>
        </div> */}
        {/* <nav>
          <ul className="flex flex-col items-center gap-2 pt-4 text-xl text-white md:flex-row">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Get in touch</li>
            <li>FAQs</li>
          </ul>
        </nav> */}
      </div>
      <div className="border-t-solid flex w-full items-center justify-center border-t border-t-white py-5 text-[10px] text-white md:text-sm lg:text-base">
        Non Copyrighted © 2024 Upload by Westernwells
      </div>
    </div>
  );
}
