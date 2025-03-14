import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store?.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  console.log(user);

  return (
    <div className="absolute w-screen px-8 py-1 bg-gradient-to-b from-black z-20 flex justify-between">
      <img
      className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {
        !!user ? 
        <div className="p-2 m-2 flex justify-between">
          <div>
          <img className="w-12 h-12" src={user?.photoURL} alt="profilePic"/>
          {/* <p className="p-2 font-bold text-red-700">{user?.displayName}</p> */}
          </div>
        <button className="font-bold text-red-700 m-4 cursor-pointer" onClick={handleSignOut}>Sign Out</button>
        </div>  : null
      }
    </div>
  );
};

export default Header;
