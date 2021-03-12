import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faBars, faBell, faChartLine, faClone, faHeartbeat, faSignOutAlt, faTh, faUserCircle, faWallet, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import ActiveLink from "../ActiveLink";
import SearchBar from "./SearchBar/Index";

// h-10

function MainLogo () {
  return (<img src="/images/White Mask.png" className="h-8 lg:h-10" alt="MemeUnity Logo" />)
}

function Logo(props: {sidebar?:boolean}) {
  return (
    <div className={(props.sidebar ? "ml-6": "ml-0") + " flex flex-row items-center w-48 mr-auto lg:mx-0"}>
      {/* ^ justify-between */}
      <MainLogo />
      {/* text-xl ml-0*/}
      <div className="font-title text-lg lg:text-xl ml-3 lg:ml-4 font-bold tracking-wider">
        MU&nbsp;Citadel
      </div>
    </div>
  );
}

// Close Popdown/Popup when click outside.
// Documentation: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
// Fixed some bugs with this: https://codedaily.io/tutorials/63/Create-a-Dropdown-in-React-that-Closes-When-the-Body-is-Clicked
function useOutsideAlerter(
  ref: React.MutableRefObject<any>,
  showPopdown: React.Dispatch<React.SetStateAction<boolean>>,
) {
  useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            showPopdown(false)
          }
      }
      // Bind the event listener
      document.addEventListener("mouseup", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mouseup", handleClickOutside);
      };
  }, [ref]);
}

function NavRightSide() {
  const [popdownIsVisible, showPopdown] = React.useState(false)
  function showPopdownCommand() {
    if (popdownIsVisible === false) {
      showPopdown(true)
    } else if (popdownIsVisible === true) {
      showPopdown(false)
    }
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, showPopdown)
  function Link (props: {icon: IconDefinition, href?: string, children: string}) {
    return (
      <a className="flex flex-column text-lg hover:bg-mainbg cursor-pointer">
        <div className="flex items-center py-3 px-5">
          <FontAwesomeIcon icon={props.icon} className="mr-5"/>
          <div>{props.children}</div>
        </div>
      </a>
    )
  }

  return (
    <div className="text-2xl lg:text-3xl flex lg:w-64 justify-between ">
      <FontAwesomeIcon icon={faPlusSquare} className="hidden lg:flex"/>
      <FontAwesomeIcon icon={faTh}  className="lg:flex hidden"/>
      <FontAwesomeIcon icon={faBell}  className="lg:flex hidden"/>
      <FontAwesomeIcon icon={faChartLine}  className="lg:flex hidden"/>
      <div ref={wrapperRef} onClick={showPopdownCommand} className="flex flex-column"><FontAwesomeIcon icon={faUserCircle} className="cursor-pointer"/> 
      <div className={(popdownIsVisible ? "absolute" : "hidden") + " origin-top-right top-14 right-4 bg-asidebg shadow-2xl text-lg rounded-lg flex flex-col font-semibold"}>
        <Link icon={faPlusSquare}>Create NFT</Link>
        <Link icon={faClone}>My NFTs</Link>
        <Link icon={faWallet}>Wallet</Link>
        <Link icon={faHeartbeat}>Activity</Link>
        <Link icon={faSignOutAlt}>Log Out</Link>
      </div></div>
    </div>
  );
}

export default function NavBar(props: {sidebar?: boolean}) {
  const router = useRouter()
  return (
    <div className="flex flex-row lg:justify-between h-16 bg-asidebg items-center px-6">
      {props.sidebar ? <FontAwesomeIcon icon={faBars} className="text-3xl mr-2 lg:hidden"/> : undefined}
      <ActiveLink href={router.pathname === "/" ? "#" : "/"}><Logo sidebar={props.sidebar} /></ActiveLink>
      <SearchBar className="hidden lg:flex"/>
      <NavRightSide />
    </div>
  );
}
