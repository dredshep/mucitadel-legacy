import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faBars, faBell, faChartLine, faClone, faHeartbeat, faSignOutAlt, faTh, faUserCircle, faWallet, IconDefinition, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import ActiveLink from "../ActiveLink";
import SearchBar from "./SearchBar/Index";

import Cookies from 'universal-cookie';
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
  const [isLoggedIn, logIn] = React.useState(false)
  const [loginModalIsVisible, showLoginModal] = React.useState(false)
  const showLoginModalCommand = () => showLoginModal(!loginModalIsVisible)
  // onClick={}

  const onClickConnect = async () => {
    try {
      const newAccounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
    } catch (error) {
      console.error(error)
    }
  }
  async function connectMetaMask() {
    console.log('click metamask button')
    const newAccounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    const cookies = new Cookies()
    if( newAccounts !== undefined) {
      cookies.set("metamask_connected", "true");
    }else {
      cookies.set("metamask_connected", "false");
    }
    console.log(newAccounts[0])
    console.log(cookies.get("metamask_connected"))
  }
  return (
    <div className="text-2xl ml-auto lg:ml-0 lg:text-3xl flex space-x-6 items-center">
      <div className={!loginModalIsVisible ? "hidden" : "fixed origin-top-left top-0 left-0 z-20 h-screen w-screen bg-mupurple opacity-60"} onClick={showLoginModalCommand}></div>
      <div className={!loginModalIsVisible ? "hidden" : "fixed origin-top-left top-0 left-0 z-20 h-screen w-screen"}>
        <div className="flex items-center justify-around h-full">
          <div className="bg-mainbg rounded-xl max-w-lg w-full overflow-hidden">
            <div className="text-title text-secondary text-lg font-semibold justify-around">
              <div className="w-full flex justify-between">
                <div className="px-10 flex justify-around items-center">Choose your login method:</div>
                <div className="w-14 h-14 flex justify-around cursor-pointer items-center hover:bg-asidebg hover:text-white" onClick={showLoginModalCommand}>
                  <FontAwesomeIcon icon={faTimes}/>
                </div>
              </div>
              {/* <div className="max-w-max pb-3">Choose your login method:</div> */}
              <div className="flex justify-center space-x-5 py-10 bg-asidebg">
                <div className="px-4 py-2 font-semibold border-white border-opacity-50 hover:border-opacity-100 border-solid border-2 bg-metamask-bg text-metamask-text rounded-full cursor-pointer" onClick={connectMetaMask}>Metamask</div>
                <div className="px-4 py-2 font-semibold bg-phantasmablue border-white border-opacity-50 hover:border-opacity-100 border-solid border-2 text-white rounded-full cursor-pointer">Poltergeist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FontAwesomeIcon icon={faPlusSquare} className={`hidden${isLoggedIn ? " lg:flex" : ""}`}/>
      <FontAwesomeIcon icon={faTh} className="lg:flex hidden"/>
      <FontAwesomeIcon icon={faBell} className={`hidden${isLoggedIn ? " lg:flex" : ""}`}/>
      <FontAwesomeIcon icon={faChartLine}  className="lg:flex hidden"/>
      <div
        className={isLoggedIn ? "hidden" : "cursor-pointer bg-mupurple py-4 px-4 rounded-full text-xl  font-title tracking-wide font-semibold leading-3"}
        onClick={showLoginModalCommand}
      >Login</div>
      <div ref={wrapperRef} onClick={showPopdownCommand} className={isLoggedIn ? "flex flex-column" : "hidden"}><FontAwesomeIcon icon={faUserCircle} className="cursor-pointer"/> 
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
