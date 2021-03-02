import SearchBar from "./SearchBar/Index";

function MainLogo () {
  return (<img src="/images/White Mask.png" className="h-10" alt="MemeUnity Logo" />)
}

function Logo() {
  return (
    <div className="flex flex-row items-center w-48 justify-between">
      <MainLogo />
      <div className="font-title text-xl font-bold tracking-wider">
        MU&nbsp;Citadel
      </div>
    </div>
  );
}

function NavRightSide() {
  return (
    <div className="text-3xl flex w-64 justify-between">
      <i className="far fa-plus-square"></i>
      <i className="fas fa-th"></i>
      <i className="fas fa-bell"></i>
      <i className="fas fa-chart-line"></i>
      <i className="fas fa-user-circle"></i>
    </div>
  );
}

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between h-16 bg-asidebg items-center px-6">
      <Logo />
      <SearchBar />
      <NavRightSide />
    </div>
  );
}
