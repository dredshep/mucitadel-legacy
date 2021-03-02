import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faBars, faBell, faChartLine, faTh, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

function NavRightSide() {
  return (
    <div className="text-3xl xl:flex w-64 justify-between hidden ">
      <FontAwesomeIcon icon={faPlusSquare} />
      <FontAwesomeIcon icon={faTh} />
      <FontAwesomeIcon icon={faBell} />
      <FontAwesomeIcon icon={faChartLine} />
      <FontAwesomeIcon icon={faUserCircle} />
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
