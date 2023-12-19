import React from "react";

const SignUp = () => {
  return (
    <div className="absolute m-auto w-3/5 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 flex flex-col content-center items-center">
      <p className="text-5xl text-center font-extrabold">
        Enjoy big movies, hit series and more from ₹149.
      </p>
      <p className="text-3xl font-semibold m-4">Join today. Cancel anytime.</p>
      <p className=" text-center text-3xl font-semibold m-4">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex flex-wrap content-center text-center w-full justify-evenly">
        <input
          type="email"
          placeholder="Email address"
          className="p-3 mx-2 w-8/12 bg-neutral-800 opacity-90 text-white border-2 border-solid border-slate-600 rounded-lg"
        />
        <button className="p-3  w-3/12 bg-red-600 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SignUp;
