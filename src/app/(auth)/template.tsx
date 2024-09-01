"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PrimaryButton from "../ui/components/buttons/primary-button";

export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div
      className={`items-centerr flex ${pathname === "/signup" ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* <div className="hidden w-[35%] sm:block">The image part</div> */}
      {pathname === "/signup" ? (
        <div
          className="hidden h-[100vh] w-[40%] flex-col items-center justify-center bg-cover bg-center sm:flex"
          style={{
            backgroundImage: "url('/signupPageBg.png')",
          }}
        >
          <div className="flex w-[90%] flex-col items-center justify-center rounded-lg bg-black bg-opacity-60 px-[5%] py-6">
            <h2 className="font-semibold text-white sm:text-2xl md:text-3xl lg:text-4xl">
              Welcome back
            </h2>

            <p className="my-5 text-center text-white sm:text-sm md:text-base">
              To keep connected, provide us with your information
            </p>

            <Link href={"/signin"} className="w-full max-w-[128px]">
              <PrimaryButton
                label="Signin"
                className="bg-white bg-opacity-40 text-white"
              />
            </Link>
          </div>
        </div>
      ) : (
        <div
          className="hidden h-[100vh] w-[40%] flex-col items-center justify-center bg-cover bg-center sm:flex"
          style={{
            backgroundImage: "url('/signinPageBg.png')",
          }}
        >
          <div className="flex w-[90%] flex-col items-center justify-center rounded-lg bg-blue-400 bg-opacity-60 px-[5%] py-6">
            <h2 className="font-semibold text-white sm:text-2xl md:text-3xl lg:text-4xl">
              Hello Friend
            </h2>
            <p className="my-5 text-center text-white sm:text-sm md:text-base">
              To keep connected, provide us with your information
            </p>
            {/* <Link href={"/signup"}>Signup</Link> */}
            <Link href={"/signup"} className="w-full max-w-[128px]">
              <PrimaryButton
                label="Signup"
                className="bg-white bg-opacity-40 font-semibold text-grayText"
              />
            </Link>
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col px-[5%] py-20">{children}</div>
    </div>
  );
}
