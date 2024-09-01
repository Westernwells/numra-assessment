import Link from "next/link";

export default function AuthFormContainer({}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href={"/"} className="text-3xl font-bold">
        Event <span className="text-[#7848F4]">Hive</span>
      </Link>

      {/* <h2>{authType === "signup" ? "Sign up" : "Sign in"} to Event Hive</h2>

      <div>{authType === "signup" ? <SignupForm /> : <SigninForm />}</div> */}
    </div>
  );
}
