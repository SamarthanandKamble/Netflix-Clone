import { useState, useRef } from "react";
import { validateSignupEmail } from "../utils/validateData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/Redux/userSlice";
const SignUp = () => {
  const [checkEmail, setCheckEmail] = useState(null);
  const email = useRef();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSignForm = () => {
    let emailValue = email.current.value;
    let errorMessage = validateSignupEmail(emailValue);
    setCheckEmail(errorMessage);
    if (errorMessage) return;
    navigate("/signupform");
    
    dispatch(addUser({ email: emailValue }));
  };

  return (
    <div className="absolute m-auto w-3/5 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 flex flex-col content-center items-center">
      <p className="text-5xl text-center font-extrabold">
        Enjoy big movies, hit series and more from ₹149.
      </p>
      <p className="text-3xl font-semibold m-4">Join today. Cancel anytime.</p>
      <p className=" text-center text-3xl font-semibold m-4">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-wrap content-center text-center w-full justify-evenly"
      >
        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="p-3 mx-2 w-8/12  bg-gray-900 text-white border-2 border-solid border-slate-400 rounded-lg"
        />
        <button
          className="p-3  w-3/12 bg-red-600 rounded-lg"
          onClick={handleSignForm}
        >
          Get Started
        </button>
      </form>
      {checkEmail && (
        <p className="font-bold text-red-500 mt-2 w-full text-end pr-6">
          {checkEmail}
        </p>
      )}
    </div>
  );
};

export default SignUp;
