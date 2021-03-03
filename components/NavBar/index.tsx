import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faBars, faBell, faChartLine, faClone, faHeartbeat, faSignOutAlt, faTh, faUserCircle, faWallet, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar/Index";

function MainLogo () {
  return (<img src="/images/White Mask.png" className="h-10" alt="MemeUnity Logo" />)
}

function Logo() {
  return (
    <div className="flex flex-row items-center w-48 mx-auto xl:mx-0 justify-between">
      <MainLogo />
      <div className="font-title text-xl font-bold tracking-wider">
        MU&nbsp;Citadel
      </div>
    </div>
  );
}

// let popdownIsVisible = false;

// function showPopdown () {
//   if (popdownIsVisible) popdownIsVisible = false
//   else popdownIsVisible = true
// }

const CardsIcon = <svg xmlns="http://www.w3.org/2000/svg" className="text-white" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="white"/><path d="M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"/></svg>

const CardsIcon2 = (
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" height="24" width="24" x="0px" y="0px"
	 viewBox="0 0 512.001 512.001">
<path style={{fill:"#FCC938"}} d="M357.45,372.261l-185.651,75.103l-1.933,0.784c-22.394,9.29-48.079-1.317-57.369-23.721
	L3.369,161.583c-9.3-22.394,1.317-48.079,23.711-57.369l166.622-69.178c22.404-9.3,48.09,1.317,57.38,23.7l13.198,28.298
	l77.496,166.099L357.45,372.261z"/>
<path style={{fill:"#E2A91B"}} d="M357.45,372.261l-185.651,75.103l-7.357-2.215c-23.209-7.001-36.355-31.485-29.353-54.705
	l82.198-272.468c6.228-20.649,26.292-33.335,46.993-30.942l77.496,166.099L357.45,372.261z"/>
<path style={{fill:"#ED3B3B"}} d="M510.121,176.62l-82.198,272.478c-7.001,23.209-31.496,36.355-54.705,29.353l-144.061-43.461
	l-28.664-8.652c-23.219-7.001-36.355-31.485-29.353-54.705l82.198-272.468c7.001-23.209,31.485-36.355,54.694-29.353l172.735,52.113
	c1.578,0.481,3.114,1.035,4.598,1.682C505.669,132.261,516.642,154.989,510.121,176.62z"/></svg>)

// Close Popdown/Popup when click outside.
// Documentation: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
// function useOutsideAlerter(
//   ref: React.MutableRefObject<any>,
//   popdownIsVisible: boolean,
//   markButton: React.Dispatch<React.SetStateAction<boolean>>,
//   showPopdown: React.Dispatch<React.SetStateAction<boolean>>,
// ) {
//   useEffect(() => {
//       /**
//        * Alert if clicked on outside of element
//        */
//       function handleClickOutside(event) {
//           if (ref.current && !ref.current.contains(event.target)) {
//               if (popdownIsVisible) {
//                 alert(JSON.stringify(popdownIsVisible))
//                 markButton(true)
//                 showPopdown(false)
//               }
//           }
//       }

//       // Bind the event listener
//       document.addEventListener("mouseup", handleClickOutside);
//       return () => {
//           // Unbind the event listener on clean up
//           document.removeEventListener("mouseup", handleClickOutside);
//       };
//   }, [ref]);
// }

// Guide to fix it: https://codedaily.io/tutorials/63/Create-a-Dropdown-in-React-that-Closes-When-the-Body-is-Clicked

function NavRightSide() {
  // const [popdownIsVisible, showPopdown] = React.useState(false)
  // const [buttonIsPressed, markButton] = React.useState(false)
  // function showPopdownCommand() {
  //   if (popdownIsVisible === false && !buttonIsPressed){
  //     showPopdown(true)
  //   } else if (buttonIsPressed) {
  //     // alert('bitch')
  //     markButton(false)
  //   }
  // }
  // let showing = false;
  // $('#openAccount').on('click', () => {
  //   showing = !showing
  //   console.log(showing)
  // })
  // const showPopdownCommand = () => 
  // const dontShowPopdown = () => showPopdown(false)
  // const wrapperRef = useRef(null)
  // useOutsideAlerter(wrapperRef, popdownIsVisible, markButton, showPopdown)
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
  //*href={props.href}*/}</a>/
//    {/*href="#"*/}
//  {/*href="#"*/}
//  {/*href="#"*/}
//  {/*href="#"*/}
//  {/*href="#"*/}
/*onClick={showPopdownCommand}/>*/
/*ref={wrapperRef}>*/

const [open, setOpen] = useState(false)



  return (
    <div className="text-3xl flex xl:w-64 justify-between ">
      <FontAwesomeIcon icon={faPlusSquare} className="hidden xl:flex"/>
      <FontAwesomeIcon icon={faTh}  className="xl:flex hidden"/>
      <FontAwesomeIcon icon={faBell}  className="xl:flex hidden"/>
      <FontAwesomeIcon icon={faChartLine}  className="xl:flex hidden"/>
      <FontAwesomeIcon icon={faUserCircle} className="cursor-pointer"/> 
      <div className={(showing ? "absolute" : "hidden") + " origin-top-right right-8 mt-14 bg-asidebg shadow-2xl text-lg rounded-lg flex flex-col font-semibold"}>
        <Link icon={faPlusSquare}>Create NFT</Link>
        <Link icon={faClone}>My NFTs</Link>
        <Link icon={faWallet}>Wallet</Link>
        <Link icon={faHeartbeat}>Activity</Link>
        <Link icon={faSignOutAlt}>Log Out</Link>
      </div>
    </div>
  );
}

export default function NavBar() {
  return (
    <div className="flex flex-row xl:justify-between h-16 bg-asidebg items-center px-6">
      <FontAwesomeIcon icon={faBars} className="text-3xl xl:hidden"/>
      <Logo />
      <SearchBar className="hidden xl:flex"/>
      <NavRightSide />
    </div>
  );
}
