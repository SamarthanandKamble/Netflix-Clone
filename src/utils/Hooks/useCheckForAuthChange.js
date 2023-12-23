import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/userSlice";

const useCheckForAuthChange = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        navigate("/browse");
        dispatch(addUser({ uid: uid, email: email }));
      } else {
        navigate("/");
      }
    });

    return () => subscribe();
  }, []);
};

export default useCheckForAuthChange;
