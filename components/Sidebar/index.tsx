import React, { useRef } from "react";
import { useState } from "react";
import FilterByPrice from "./FilterByPrice";
import FilterByTier from "./FilterByTier";

// function useOutsideAlerter(
//   ref: React.MutableRefObject<any>,
//   showSidebar: React.Dispatch<React.SetStateAction<boolean>>,
// ) {
//   useEffect(() => {
//       /**
//        * Alert if clicked on outside of element
//        */
//       function handleClickOutside(event) {
//           if (ref.current && !ref.current.contains(event.target)) {
//             showSidebar(false)
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

export default function Sidebar(props: { display: "hidden" | "flex" }) {
  const [sidebarIsHidden, showSidebar] = React.useState(false)
  function showSidebarCommand() {
    // alert(sidebarIsHidden)
    if (sidebarIsHidden === false) {
      console.log('showing')
      showSidebar(true)
      document.body.style.overflow = "scroll"
    } else if (sidebarIsHidden === true) {
      console.log('hiding')
      showSidebar(false)
      document.body.style.overflow = "hidden"
    }
  }
  // const wrapperRef = useRef(null)
  // useOutsideAlerter(wrapperRef, showSidebar)
  return (
    <>
      <div onClick={showSidebarCommand} className={"absolute origin-top-left top-0 left-0 lg:hidden h-16 w-20"}></div>
      <aside className={(sidebarIsHidden ? "hidden lg:flex lg:relative" : "flex absolute lg:relative") + " flex-shrink-0 flex-grow min-h-screen max-h-full bg-asidebg p-4"}>
        
          <div className={"flex w-64 flex-col items-start flex-shrink-0 min-h-screen max-h-full"}>
          <div className="sticky top-0 ">
            <FilterByPrice />
            <FilterByTier />
          </div>
        </div>
      </aside>
      <div onClick={showSidebarCommand} className={sidebarIsHidden ? "hidden" : "absolute lg:hidden left-72 opacity-25 top-0 h-full w-full bg-mupurple"}></div>
    </>
  );
}
