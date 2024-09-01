// import AuthFormContainer from "../ui/partials/auth-form-container";
import Link from "next/link";
import AuthFormContainer from "../ui/partial/auth-form-container";
import PrimaryButton from "~/app/ui/components/buttons/primary-button";

export default function Signin() {
  return (
    <div className="flex flex-1 flex-col items-center rounded-md bg-green-300">
      <div className="flex flex-col items-center">
        <Link href={"/"} className="text-3xl font-bold">
          Event <span className="text-[#7848F4]">Hive</span>
        </Link>
        <h3 className="my-10 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          Sign In to Event Hive
        </h3>
      </div>
      <div className="flex w-full flex-1 flex-col items-center justify-center">
        <div className="mx-auto mt-10 w-full max-w-[200px]">
          <Link href={"/dashboard"}>
            <PrimaryButton label="Signin" />
          </Link>
        </div>
      </div>
    </div>
  );
}
