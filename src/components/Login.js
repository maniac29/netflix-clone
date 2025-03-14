import { useState,useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg,setErrorrMsg] = useState(null);

  const email = useRef(null);
  const pwd = useRef(null);
  const name = useRef(null);

  const toggleSignInSignUp = () => {
    setIsSignInForm(!isSignInForm);
    setErrorrMsg("");
  };
  const handleButtonClick = () => {
    if(!isSignInForm){
        const isNameValid = !!name?.current?.value;
        if(!isNameValid){
            setErrorrMsg("Name is a mandatory field");
            return;
        }
    }
    const errorMsg = checkValidateData(email?.current?.value,pwd?.current?.value,name?.current?.value);
    setErrorrMsg(errorMsg);
    if(!!errorMsg) return;
    if(!isSignInForm){
      //Sign UP logic
      createUserWithEmailAndPassword(auth, email?.current?.value, pwd?.current?.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("USER--->",user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorrMsg(errorCode + "-" + errorMessage)
    // ..
  });

    }else{
      //Sign IN Logic
      signInWithEmailAndPassword(auth, email?.current?.value, pwd?.current?.value)
      .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("USER--->",user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorrMsg(errorCode + "-" + errorMessage)
  });
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-screen h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"
          alt="body"
        />
      </div>
      <form
        action=""
        onSubmit={(e)=>{e.preventDefault()}}
        className="absolute w-3/12 h-4/6 my-52 mx-auto right-0 left-0 p-12 text-white rounded-xl bg-black bg-opacity-80"
      >
        <h1 className="font-bold text-5xl m-2 mb-10">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 mb-5 w-full h-16 text-xl rounded-lg  bg-black opacity-80 border-white border-4 focus:outline-none focus:border-white focus:border-4 bg-opacity-80"
          />
        ) : null}
        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 mb-5 w-full h-16 text-xl rounded-lg  bg-black opacity-80 border-white border-4 focus:outline-none focus:border-white focus:border-4 bg-opacity-80"
        />
        <input
        ref={pwd}
          type="password"
          placeholder="Password"
          className="p-2 m-2 mb-5 w-full h-16 text-xl rounded-lg  bg-black opacity-80 border-white border-4 focus:outline-none focus:border-white focus:border-4  bg-opacity-80"
        />
        {
            !!errorMsg ? 
            <p className="w-full p-2 mb-5 text-red-700">{errorMsg}</p> : null
        }
        <button className="p-4 m-2 mb-10 w-full font-bold bg-red-700 rounded-lg text-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="m-2">
            New to Netflix ?{" "}
            <strong
              className="hover: cursor-pointer"
              onClick={toggleSignInSignUp}
            >
              Sign Up
            </strong>{" "}
            now.
          </p>
        ) : (
          <p className="m-2">
            {" "}
            Already have an account ? Please{" "}
            <strong
              className="hover: cursor-pointer"
              onClick={toggleSignInSignUp}
            >
              Sign In
            </strong>
            .
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
