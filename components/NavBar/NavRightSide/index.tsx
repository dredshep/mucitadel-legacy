import { faBell, faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faChartLine, faTh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AuthData, LogIn, LogOut } from "../../types/AuthenticationProvider";
import LoginModal from "../LoginModal";
import PopDown from "../PopDown";

export default function NavRightSide(props: {
  logIn: LogIn;
  logOut: LogOut;
  authData: AuthData;
}) {
  const [loginModalIsVisible, showLoginModal] = React.useState(false);
  const showLoginModalCommand = () => showLoginModal(!loginModalIsVisible);
  return (
    <div className="text-xl ml-auto lg:ml-0 flex space-x-8 items-center mr-3">
      <div
        className={
          !loginModalIsVisible
            ? "hidden"
            : "fixed origin-top-left top-0 left-0 z-20 h-screen w-screen bg-mupurple opacity-60"
        }
        onClick={showLoginModalCommand}
      ></div>
      <LoginModal
        {...{ showLoginModalCommand, loginModalIsVisible, logIn: props.logIn }}
      />
      <FontAwesomeIcon
        icon={faPlusSquare}
        className={`hidden${props.authData?.address ? " lg:flex" : ""}`}
      />
      <FontAwesomeIcon icon={faTh} className="lg:flex hidden" />
      <FontAwesomeIcon
        icon={faBell}
        className={`hidden${props.authData?.address ? " lg:flex" : ""}`}
      />
      <FontAwesomeIcon icon={faChartLine} className="lg:flex hidden" />
      <div
        className={
          props.authData?.address
            ? "hidden"
            : "cursor-pointer bg-mupurple py-4 px-4 rounded-full text-xl  font-title tracking-wide font-semibold leading-3"
        }
        onClick={showLoginModalCommand}
      >
        Login
      </div>
      <PopDown
        {...{
          isLoggedIn: props.authData?.address,
          authData: props.authData,
          logOut: props.logOut,
        }}
      />
    </div>
  );
}
