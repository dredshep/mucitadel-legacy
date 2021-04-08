import { faBell, faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faChartLine,
  faSignInAlt,
  faTh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Explained from "../../Explainer/Explained";
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
    <div className="text-xl ml-auto lg:ml-0 flex mr-3 h-full">
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
      <Explained explanation="Add NFT">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className={`hidden${props.authData?.address ? " lg:flex" : ""}`}
        />
      </Explained>
      <Explained explanation="Catalogue">
        <FontAwesomeIcon icon={faTh} className="lg:flex hidden" />
      </Explained>
      <Explained explanation="Notifications">
        <FontAwesomeIcon
          icon={faBell}
          className={`hidden${props.authData?.address ? " lg:flex" : ""}`}
        />
      </Explained>
      <Explained explanation="Stats">
        <FontAwesomeIcon icon={faChartLine} className="lg:flex hidden" />
      </Explained>
      <div
        className={
          props.authData?.address
            ? "hidden"
            : "cursor-pointer bg-mupurple py-4 px-4 rounded-full text-xl  font-title tracking-wide font-semibold leading-3"
        }
        onClick={showLoginModalCommand}
      >
        {/* desktop */}
        <span className="hidden lg:flex">Login</span>
        {/* mobile */}
        <span className="flex lg:hidden">
          <Explained explanation="Options">
            <FontAwesomeIcon icon={faSignInAlt} />
          </Explained>
        </span>
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
