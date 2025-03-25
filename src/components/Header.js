import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { logo } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user);
  const showGptScreen = useSelector((store) => store?.gpt?.showGptScreen);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      //navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe ehrn component dismounts
    return ()=> unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView())
  }

  return (
    <div className="absolute w-screen px-8 py-1 bg-gradient-to-b from-black z-20 flex justify-between">
      <img
      className="w-44"
        src={logo}
        alt="logo"
      />
      {
        !!user ? 
        <div className="p-2 m-2 flex justify-between">
          <div>
          <img className="w-12 h-12" src={user?.photoURL} alt="profilePic"/>
          {/* <p className="p-2 font-bold text-red-700">{user?.displayName}</p> */}
          </div>
          {/* <button className="py-2 px-4 mx-4 my-2 rounded-lg bg-gray-600 text-white  cursor-pointer" onClick={handleGPTSearchClick}>{showGptScreen ? "Home" : "GPT Search"}</button> */}
        <button className="font-bold text-red-700 m-4 cursor-pointer" onClick={handleSignOut}>Sign Out</button>
        </div>  : null
      }
    </div>
  );
};

export default Header;
