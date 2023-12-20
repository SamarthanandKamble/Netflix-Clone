import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { validateSignupPassword } from "../utils/validateData";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SignupForm = () => {
  const email = useSelector((state) => state.user);

  const password = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checkPassword, setCheckPassword] = useState(null);

  const handleSignUpForm = () => {
    const passwordValue = password.current.value;
    const errorMessage = validateSignupPassword(passwordValue);
    setCheckPassword(errorMessage);
    if (errorMessage) return;
    dispatch(addUser({ ...email, password: passwordValue }));
    addUserToDb(email.email, passwordValue);
    navigate("/browse");
  };

  const addUserToDb = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("user:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        setCheckPassword(error.message);
        // ..
      });
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" flex flex-col content-center items-center p-5 w-8/12 mx-auto "
      >
        <span className="text-5xl text-center font-semibold my-3 ">
          Are you excited to be the part of
          <span className="font-extrabold text-red-600 ml-2 p-2">
            NETFLIX N CHILL
          </span>
          yey?
        </span>
        <input
          type="text"
          placeholder="Enter Firstname"
          className="p-4 w-full m-2 p-2  bg-gray-900 text-white border-2 border-solid border-slate-400 rounded-lg"
        />
        <input
          type="text"
          placeholder="Enter Lastname"
          className="p-4 w-full m-2 p-2  bg-gray-900 text-white border-2 border-solid border-slate-400 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-4 w-full m-2 p-2  bg-gray-900 text-white border-2 border-solid border-slate-400 rounded-lg"
        />
        <button
          className="p-4 rounded-lg bg-red-600 w-6/12 text-white font-bold"
          onClick={handleSignUpForm}
        >
          Sign Up
        </button>
      </form>
      {checkPassword && (
        <p className="font-bold text-red-500 text-center">{checkPassword}</p>
      )}
    </>
  );
};

export default SignupForm;
