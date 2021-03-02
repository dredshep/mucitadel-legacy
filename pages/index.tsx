import Cards2 from "../components/Cards2";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Toolbar from "../components/Toolbar";
import Footer from "../components/Footer";


function Content() {
  return (
    <div className="flex flex-row h-full">
      <Sidebar />
      <div className="flex flex-col items-center w-full box-border">
        <Toolbar />
        <Cards2 />
      </div>
    </div>
  );
}

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

export default function Home() {
  return (
    <div className="App text-white bg-mainbg min-h-screen">
      <NavBar />
      <Content />
      <Footer/>
    </div>
  );
}
