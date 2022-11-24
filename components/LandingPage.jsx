import Image from "next/image";
import Link from "next/link";

//Landing page that has a hero section with a headline in the left and an image on the right.
// Below the headline is a button that links to the login page or the signup page.

const LandingPage = () => {
  return (
    <div className="bg-[#ACBFB7] h-screen w-screen flex justify-between md:flex-row flex-col">
      <div className="flex flex-col justify-center text-center items-center md:w-1/2 ">
        <h1 className="text-5xl font-bold text-black">
          Welcome to the <br /> <span className="text-red-400">Murimi</span>{" "}
          <br /> ShyLock Loans
        </h1>
        <p className="text-black text-center mt-4">
          Apply for a loan and get it in less than 24 hours. We are here to help
          you get the money you need.
        </p>
        <div className="flex flex-row justify-center items-center mt-4">
          <Link href="/auth/login">
            <button className="flex items-center justify-center w-32 h-10 bg-black rounded-lg text-white mr-4">
              Login
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="flex items-center justify-center w-32 h-10 bg-red-400 rounded-lg text-white">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center md:w-1/2">
        <Image src="/assets/loanapplication.webp" width={500} height={500} />
      </div>
    </div>
  );
};

export default LandingPage;
